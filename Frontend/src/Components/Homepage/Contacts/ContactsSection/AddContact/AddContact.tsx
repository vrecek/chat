import React from 'react'
import Icon from '../../../../Common/Icon'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import NewContactForm from './NewContactForm'
import Client, { Aliases } from '../../../../../Functions/Client'

const AddContact = () => {
    const dd = new Client.DropDown(300)

    const toggleForm = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement,
              form: Aliases.Form = t.parentElement!.children[1] as Aliases.Form


        dd.switchActive()
        dd.getActive
            ? dd.expandMenu(form)
            : dd.shrinkMenu()
    }


    return (
        <div className="add-contact">

            <Icon action={toggleForm}><AiOutlinePlusCircle /></Icon>

            <NewContactForm />

        </div>
    )
}

export default AddContact