type UserType = {
    _id: string

    username: string
    mail: string

    hash: string
    salt: string

    created: number

    friends: Friend[]
    
    avatar: string

    invites: UserMisc[]
}

export type UserMisc = {
    avatar: string
    username: string
    id: string
}

export type Friend = UserMisc & {
    lastMessage: LastMessage
}

export type LastMessage = {
    date: number
    text: string
} | null


export default UserType