export type ConversationType = {
    conversationId: string
    otherUser: OtherUser 
    loggedUser: string
    messages: Message[]
}


export type OtherUser = {
    avatar: string
    username: string
    id: string
}

export type Message = {
    sendDate: number
    user: string
    text: string
}