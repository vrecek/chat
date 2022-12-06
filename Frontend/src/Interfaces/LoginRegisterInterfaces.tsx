import { Aliases } from "../Functions/Client"

export type InputContainer = {
    labelText: string
    inputType: 'text' | 'password' | 'checkbox'
    cname?: string
}

export type AccountCredentials = Aliases.Text<JSX.Element[]> & {
    redirectUrl: string 
    header: string
    submitFunc: React.FormEventHandler
    cname: string
    redirectText: string
}