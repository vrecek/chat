import React from 'react'
import Client from '../../../../../Functions/Client'
import { ContactTextDetails } from '../../../../../Interfaces/LeftsideInterfaces'

const ContactText = ({username, lastMsg, lastDate}: ContactTextDetails) => {
    return (
        <div className="contact-text">

            <p className="name">{username}</p>
            {
                lastMsg
                    && <p className="text">{lastMsg}</p>
            }
            {
                lastDate
                    && <p className="date">{Client.numberToDateString(lastDate)}</p>
            }

        </div>
    )
}

export default ContactText