import React from 'react'
import socket, { setupAcceptedInviteSocket, setupInviteSocket } from '../../../../Functions/SocketIO'
import UserContext from '../../../../Functions/UserContext'
import { ContactsEntry, DisplayContent } from '../../../../Interfaces/LeftsideInterfaces'
import UserType, { Friend, UserMisc } from '../../../../Interfaces/UserType'
import AddContact from './AddContact/AddContact'
import AllContacts from './AllContacts/AllContacts'
import Invites from './Invites/Invites'
import SelectMenu from './SelectMenu'

const ContactsSection = ({setConversation, otherUser}: ContactsEntry) => {
    const user: UserType = React.useContext(UserContext)!,
          [display, setDisplay] = React.useState<DisplayContent>('contacts'),
          [friends, setFriends] = React.useState<Friend[]>(user.friends),
          [invites, setInvites] = React.useState<UserMisc[]>(user.invites)



    setupInviteSocket(user._id, setInvites)
    setupAcceptedInviteSocket(user._id, setFriends)


    return (
        <section className="contacts-section">

            <SelectMenu 
                contactsLen={friends.length} 
                invitesLen={invites.length} 
                setConversation={setConversation}
                setDisplay={setDisplay}
            />


            <section className="contacts-wrap">

                {
                    display === 'contacts'
                        ? <AllContacts otherUser={otherUser} loggedId={user._id} setConversation={setConversation} contacts={friends} />
                        : <Invites invites={invites} />
                }

            </section>


            <AddContact />

        </section>
    )
}

export default ContactsSection