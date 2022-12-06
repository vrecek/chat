import { ConversationType, OtherUser } from "./ConversationType"

export type NavigationUser = {
    avatar: string
    username: string
}

export type NavigationOptions = ConversationHook & {
    viewedId: string
    convId: string
}

export type NavigationContainer = ConversationHook & {
    conversationId: string
    user: OtherUser
}

export type ConversationHook = {
    setConversation: React.Dispatch<React.SetStateAction<ConversationType | null>>
}