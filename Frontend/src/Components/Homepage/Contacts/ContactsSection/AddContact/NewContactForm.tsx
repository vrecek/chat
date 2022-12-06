import React from 'react'
import '../../../../../css/NewContactForm.css'
import Client, { Aliases } from '../../../../../Functions/Client'
import fetchFunction from '../../../../../Functions/fetchFunction'
import UserContext from '../../../../../Functions/UserContext'
import Button from '../../../../Common/Button'
import InputDiv from '../../../../LoginRegister/InputDiv'

const NewContactForm = () => {
    const userId: string = React.useContext(UserContext)!._id

    const addFriend = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()


        const t: Aliases.Form = e.target as Aliases.Form,
              inputUser: HTMLInputElement = Array.from(t.elements as Aliases.Inputs)[0],
              box = new Client.TextBox()
                              .removePreviousBox(t, 'false')


        const body = {
            inputUser: inputUser.value,
            userId
        }

        await fetchFunction(
            {url: process.env.REACT_APP_USER_SEND_INVITE!, type: 'PUT', body},
            {position: 'containerHeight', appendTo: t, bgClr: 'rgb(25, 27, 39)'},

            () => {
                box.setClass = 'true'
                box.setMessage = 'Successfully sent'
                
                inputUser.value = ''
            },

            err => {
                box.setClass = 'false'
                box.setMessage = new Client.Fetches().returnFetchErrorState(err).msg
            },

            () => {
                box.initializeBox()
                   .appendTo(t, 2000)
            }
        )
    }


    return (
        <form onSubmit={addFriend} className='add-new'>

            <InputDiv labelText='Username' inputType='text' />

            <Button text='Submit' />

        </form>
    )
}

export default NewContactForm