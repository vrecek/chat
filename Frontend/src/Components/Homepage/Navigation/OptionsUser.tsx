import React from 'react'
import Icon from '../../Common/Icon'
import {BiUserX} from 'react-icons/bi'
import { NavigationOptions } from '../../../Interfaces/NavigationInterfaces'
import fetchFunction from '../../../Functions/fetchFunction'
import UserContext from '../../../Functions/UserContext'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Client from '../../../Functions/Client'

const OptionsUser = ({viewedId, convId, setConversation}: NavigationOptions) => {
    const userId: string = React.useContext(UserContext)!._id,
          n: NavigateFunction = useNavigate()


    const deleteContact = async (e: React.MouseEvent): Promise<void> => {
        const t: HTMLElement = e.target as HTMLElement,
              container: HTMLElement = t.parentElement!.parentElement!.parentElement! as HTMLElement


        await fetchFunction(
            {url: process.env.REACT_APP_CONVERSATION_DELETE!, type: 'DELETE', body: [userId, viewedId, convId]},
            {position: 'containerWidth', appendTo: container},

            () => {
                const aside: Element = container.parentElement!.children[0].children[1],
                      allContacts: Element[] = Array.from(aside.children[1].children[0].children),
                      contactNum: Element = aside.children[0].children[0].children[0]


                contactNum.textContent = `${parseInt(contactNum.textContent ?? '1') - 1}`
                

                for(let x of allContacts.filter(x => x.classList.contains('active')))
                    x.remove()

                setConversation(null)
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
        <section className="options-user">

            <Icon action={deleteContact}>
                <BiUserX />
            </Icon>

        </section>
    )
}

export default OptionsUser