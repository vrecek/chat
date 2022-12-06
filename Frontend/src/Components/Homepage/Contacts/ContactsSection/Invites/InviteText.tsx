import React from 'react'
import { InviteDiv } from '../../../../../Interfaces/LeftsideInterfaces'
import InviteOptions from './InviteOptions'

const InviteText = ({username, id}: InviteDiv) => {
    return (
        <div className="invite-text">

            <p className='name'>{username}</p>

            <InviteOptions id={id} />

        </div>
    )
}

export default InviteText