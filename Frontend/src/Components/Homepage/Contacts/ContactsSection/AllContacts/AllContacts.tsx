import React from 'react'
import { ContactsContainer, SocketContacts } from '../../../../../Interfaces/LeftsideInterfaces'
import OneContact from './OneContact'
import socket from '../../../../../Functions/SocketIO'
import { Aliases as a } from '../../../../../Functions/Client'


const AllContacts = ({contacts, setConversation, loggedId, otherUser}: ContactsContainer) => {
    const markNewMessage = (otherUsername: string): void => {
        const contacts: a.Possible<HTMLElement> = document.getElementById('contacts-div')
        if(!contacts) return

        const friends: a.Elem[] = Array.from(contacts.children as a.Coll<a.Elem>)


        for(let x of friends) {
            if(otherUsername === x.children[1].children[0].textContent) {
                x.className = 'contact new'

                return
            }
        }
    }


    if(socket.hasListeners('new-msg'))
        socket.off('new-msg')
        

    socket.on('new-msg', (data: SocketContacts) => {
        if(data.users.includes(loggedId) && !data.users.includes(otherUser ?? ''))
            markNewMessage(data.userUsername)
    })


    return (
        <div id='contacts-div'>
            {
                contacts.map((x, i) => (
                    <OneContact
                        key={i}
                        id={x.id}
                        username={x.username}
                        avatar={x.avatar}
                        lastDate={x.lastMessage?.date}
                        lastMsg={x.lastMessage?.text}
                        setConversation={setConversation}
                    />
                ))
            }
        </div>
    )
}

export default AllContacts