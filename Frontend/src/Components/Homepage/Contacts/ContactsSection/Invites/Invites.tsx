import React from 'react'
import { InvitesSection } from '../../../../../Interfaces/LeftsideInterfaces'
import OneInvite from './OneInvite'


const Invites = ({invites}: InvitesSection) => {
    return (
        <>

            {
                invites.map((x, i) => (
                    <OneInvite
                        key={i}
                        avatar={x.avatar}
                        id={x.id}
                        username={x.username}
                    />
                ))
            }

        </>
    )
}

export default Invites