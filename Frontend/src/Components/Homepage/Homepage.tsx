import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import UserContext, { PossibleUser } from '../../Functions/UserContext'
import { ConversationType } from '../../Interfaces/ConversationType'
import BlankChat from './BlankChat'
import Chat from './Chat/Chat'
import Contacts from './Contacts/Contacts'
import Navigation from './Navigation/Navigation'

const Homepage = () => {
    const [conversation, setConversation] = React.useState<ConversationType | null>(null)

    const user: PossibleUser = React.useContext(UserContext),
          n: NavigateFunction = useNavigate()


    React.useEffect(() => {
        if(!user) n('/sign-in', { replace: true })
    }, [])


    if(user)
    return (
        <main className="content">

            <Contacts otherUser={conversation?.otherUser.id} setConversation={setConversation} />

            <div className='rightside-wrap'>

                {
                    conversation
                        ? <>
                            <Navigation 
                                setConversation={setConversation} 
                                conversationId={conversation.conversationId} 
                                user={conversation.otherUser} 
                            />

                            <Chat
                                conversationId={conversation.conversationId} 
                                otherUser={conversation.otherUser.id}
                                messages={conversation.messages}
                            />
                          </>

                        : <BlankChat />
                }

            </div>

        </main>
    )

    return <></>
}

export default Homepage