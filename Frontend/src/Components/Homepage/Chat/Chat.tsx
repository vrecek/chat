import React from 'react'
import '../../../css/Chat.css'
import { ChatContainer } from '../../../Interfaces/ChatInterfaces'
import MessageContainer from './Messages/MessageContainer'
import WriteInput from './WriteInput/WriteInput'

const Chat = ({messages, conversationId, otherUser}: ChatContainer) => {
    return (
        <article className="chat">
            
            <MessageContainer otherUser={otherUser} messages={messages} />

            <WriteInput conversationId={conversationId} />

        </article>
    )
}

export default Chat