import io from 'socket.io-client'
import { Friend, UserMisc } from '../Interfaces/UserType'


const socket = io('http://localhost:5000')


const setupInviteSocket = (loggedId: string, setInvites: React.Dispatch<React.SetStateAction<UserMisc[]>>): void => {
    if(socket.hasListeners('invite'))
        socket.off('invite')
          
    socket.on('invite', (data: UserMisc) => {
        if(loggedId === data.id) return

        setInvites(curr => {
            return [
                ...curr,

                {
                    avatar: data.avatar,
                    username: data.username,
                    id: data.id
                }
            ]
        })
    })
}

const setupAcceptedInviteSocket = (loggedId: string, setFriends: React.Dispatch<React.SetStateAction<Friend[]>>): void => {
    if(socket.hasListeners('invite-accepted'))
        socket.off('invite-accepted')
      
    socket.on('invite-accepted', (data: UserMisc) => {
        if(loggedId === data.id) return

        setFriends(curr => {
            return [
                ...curr,

                {
                    avatar: data.avatar,
                    username: data.username,
                    id: data.id,
                    lastMessage: null
                }
            ]
        })
    })
}


export default socket
export {
    setupInviteSocket,
    setupAcceptedInviteSocket
}