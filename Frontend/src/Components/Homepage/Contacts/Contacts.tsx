import React from 'react'
import '../../../css/Contacts.css'
import { ContactsEntry } from '../../../Interfaces/LeftsideInterfaces'
import ContactsSection from './ContactsSection/ContactsSection'
import ToggleMenu from './ToggleMenu'
import UserAndLogo from './UserAndLogo/UserAndLogo'

const Contacts = ({setConversation, otherUser}: ContactsEntry) => {
    return (
        <aside className="contacts">

            <UserAndLogo />
            <ContactsSection otherUser={otherUser} setConversation={setConversation} />

            <ToggleMenu />

        </aside>
    )
}

export default Contacts