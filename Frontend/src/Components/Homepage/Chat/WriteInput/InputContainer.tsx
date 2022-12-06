import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Client from '../../../../Functions/Client'
import fetchFunction from '../../../../Functions/fetchFunction'
import UserContext from '../../../../Functions/UserContext'
import { ConversationID } from '../../../../Interfaces/ChatInterfaces'
import Icon from '../../../Common/Icon'

const InputContainer = ({conversationId}: ConversationID) => {
    const loggedId: string = React.useContext(UserContext)!._id,
          n: NavigateFunction = useNavigate()


    const sendMessage = async (e: React.MouseEvent): Promise<void> => {
        const t: HTMLElement = e.target as HTMLElement,
              input: HTMLInputElement = t.parentElement!.children[0] as HTMLInputElement,
              text: string = input.value


        const body = {
            text,
            conversationId,
            loggedId
        }

        await fetchFunction(
            {url: process.env.REACT_APP_CONVERSATION_MESSAGE!, type: 'POST', body},
            {position: 'containerHeight', appendTo: t.parentElement!, bgClr: 'rgb(25, 27, 39)'},

            () => {
                input.value = ''
            },

            err => {
                if(err.code === 400)
                    return


                n('/error', {
                    replace: true,
                    state: {
                        code: err.code,
                        msg: new Client.Fetches().returnFetchErrorState(err).msg
                    }
                })
            }
        )
    }

    return (
        <div className="input">
                
            <input type='text' spellCheck='false' />
            <Icon action={sendMessage}><AiOutlineSend /></Icon>

        </div>
    )
}

export default InputContainer