import React from 'react'
import { Aliases as a } from '../../../../Functions/Client'
import createMessage from '../../../../Functions/createMessage'
import socket from '../../../../Functions/SocketIO'
import UserContext from '../../../../Functions/UserContext'
import { ChatMessageContainer, SocketMessage } from '../../../../Interfaces/ChatInterfaces'
import MessageDiv from './MessageDiv'

const MessageContainer = ({messages, otherUser}: ChatMessageContainer) => {
    const loggedId: string = React.useContext(UserContext)!._id


    const returnClassname = (txt: string): string => txt === loggedId ? 'recipient' : 'sender'
    const scrollToBottom = (container: HTMLElement): void => container.scrollTo(0, container.scrollHeight - container.clientHeight)
    

    if(socket.hasListeners('msg'))
        socket.off('msg')


    socket.on('msg', (data: SocketMessage) => {
        const container: a.Possible<a.Elem> = document.getElementById('messages-chat-article')
            
        if(
            !container ||
            !data.users.includes(otherUser) || 
            !data.users.includes(loggedId)
        ) {
            return
        }
            

        container.appendChild(
                                createMessage(
                                    data.sendDate, 
                                    data.text, 
                                    returnClassname(data.user)
                                )
                            )

        scrollToBottom(container)
    })

    React.useEffect(() => {
        const container: a.Possible<a.Elem> = document.getElementById('messages-chat-article')
        if(!container) return

        scrollToBottom(container)
    })

    return (
        <article id='messages-chat-article' className="messages ">

            {
                messages.map((x, i) => (
                    <MessageDiv
                        key={i}
                        cname={returnClassname(x.user)}
                        text={x.text}
                        date={x.sendDate}
                    />
                ))
            }

        </article>
    )
}

export default MessageContainer