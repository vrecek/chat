import React from 'react'
import { UserMisc } from '../../../../../Interfaces/UserType'
import FigureImage from '../../../../Common/FigureImage'
import InviteText from './InviteText'
import blank from '../../../../../Images/blank.png'

const OneInvite = ({avatar, username, id}: UserMisc) => {
    return (
        <article className='invite'>

            <FigureImage source={avatar ?? blank} altTxt='Avatar' />
            <InviteText username={username} id={id} />

        </article>
    )
}

export default OneInvite