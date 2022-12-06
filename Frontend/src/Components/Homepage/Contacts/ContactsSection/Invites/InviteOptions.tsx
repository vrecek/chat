import React from 'react'
import Icon from '../../../../Common/Icon'
import {FaTimes} from 'react-icons/fa'
import {HiCheck} from 'react-icons/hi'
import fetchFunction from '../../../../../Functions/fetchFunction'
import UserContext from '../../../../../Functions/UserContext'
import Client from '../../../../../Functions/Client'

const InviteOptions = ({id}: {id: string}) => {
    const loggedId: string = React.useContext(UserContext)!._id


    const modifyFriendRequest = async (e: React.MouseEvent, type: 'accept' | 'decline'): Promise<void> => {
        const t: HTMLElement = e.target as HTMLElement,
              inviteCont: HTMLElement = t.parentElement!.parentElement!.parentElement!


        const body = {
            type,
            invitedId: id,
            loggedId
        }

        try {
            await fetchFunction(
                {url: process.env.REACT_APP_USER_MODIFY_INVITE!, type: 'PUT', body},
                {position: 'containerHeight', appendTo: inviteCont, bgClr: 'rgb(25, 27, 39)'},

                () => {
                    window.location.reload()
                },

                err => {
                    const box = new Client.TextBox(),
                          appendTarget: HTMLElement = inviteCont.parentElement!.parentElement! as HTMLElement

                    
                    box.setMessage = new Client.Fetches().returnFetchErrorState(err).msg
                    box.setClass = 'error-box'

                    box.initializeBox()
                       .removePreviousBox(appendTarget)
                       .appendTo(appendTarget, 2000)
                }
            )

        }catch(err) {

        }
    }


    return (
        <div className="options">

            <Icon action={(e) => modifyFriendRequest(e, 'accept')}>
                <HiCheck />
            </Icon>

            <Icon action={(e) => modifyFriendRequest(e, 'decline')}>
                <FaTimes />
            </Icon>

        </div>
    )
}

export default InviteOptions