import { Message } from "./ConversationType"
import { SocketContacts } from "./LeftsideInterfaces"

export type OneMessage = {
    text: string
    date: number
    cname: string
}

export type ChatContainer = ConversationID & {
    messages: Message[]
    otherUser: string
}

export type ConversationID = {
    conversationId: string
}

export type SocketMessage = Message & SocketContacts


export type ChatMessageContainer = {
    messages: Message[]
    otherUser: string
}