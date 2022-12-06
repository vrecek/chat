import React from 'react'
import '../../../css/Navigation.css'
import { NavigationContainer } from '../../../Interfaces/NavigationInterfaces'
import ChatUser from './ChatUser'
import OptionsUser from './OptionsUser'

const Navigation = ({user, conversationId, setConversation}: NavigationContainer) => {
    return (
        <nav className="navigation">

            <ChatUser username={user.username} avatar={user.avatar} />

            <OptionsUser setConversation={setConversation} convId={conversationId} viewedId={user.id} />

        </nav>
    )
}

export default Navigation