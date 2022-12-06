import React from 'react'
import { ContactDetails } from '../../../../../Interfaces/LeftsideInterfaces'
import FigureImage from '../../../../Common/FigureImage'
import ContactText from './ContactText'
import blank from '../../../../../Images/blank.png'
import UserContext from '../../../../../Functions/UserContext'
import fetchFunction from '../../../../../Functions/fetchFunction'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Client from '../../../../../Functions/Client'

const OneContact = ({avatar, username, lastMsg, lastDate, setConversation, id}: ContactDetails) => {
    const loggedId: string = React.useContext(UserContext)!._id,
          n: NavigateFunction = useNavigate()


    const showConversation = async (e: React.MouseEvent): Promise<void> => {
        setConversation(null)
        
        const t: HTMLElement = e.target as HTMLElement,
              allContacts: Element[] = Array.from(t.parentElement!.children)


        for(let x of allContacts) {
            if(x.classList.contains('new')) continue

            x.className = 'contact'
        }
        t.className = 'contact active'

        const chat: HTMLElement = t.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.children[1] as HTMLElement

        await fetchFunction(
            {url: `${process.env.REACT_APP_CONVERSATION_CHAT}/${loggedId}/${id}`, type: 'GET'},
            {position: 'containerWidth', appendTo: chat, bgClr: 'rgb(25, 27, 39)'},

            data => {
                setConversation(data)
            },

            err => {
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
        <article onClick={showConversation} className="contact">

            <FigureImage source={avatar ?? blank} altTxt='Avatar' />

            <ContactText username={username} lastMsg={lastMsg} lastDate={lastDate} />

        </article>
    )
}

export default OneContact