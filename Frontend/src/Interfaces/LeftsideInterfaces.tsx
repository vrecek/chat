import { ConversationType } from './ConversationType'
import {Friend, UserMisc} from './UserType'

export type LoggedUserDetails = {
    username: string
}

export type ContactDetails = ContactTextDetails & ConversationHook & {
    avatar: string
    id: string
}

export type ContactTextDetails = {
    username: string
    lastMsg?: string
    lastDate?: number
}

export type Menu = ConversationHook & {
    contactsLen: number
    invitesLen: number
    setDisplay: React.Dispatch<React.SetStateAction<DisplayContent>>
}

export interface InviteDiv extends Omit<UserMisc, 'avatar'> {}

export type DisplayContent = 'contacts' | 'invites'

export type ConversationHook = {
    setConversation: React.Dispatch<React.SetStateAction<ConversationType | null>>
}

export type ContactsEntry = ConversationHook & {
    otherUser?: string
}

export type ContactsContainer = ContactsEntry & {
    contacts: Friend[]
    loggedId: string
}

export type SocketContacts = {
    users: [string, string]
    userUsername: string
}

export type InvitesSection = {
    invites: UserMisc[]
}