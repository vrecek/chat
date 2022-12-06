import React from 'react'
import Client from '../../../../Functions/Client'
import { OneMessage } from '../../../../Interfaces/ChatInterfaces'

const MessageDiv = ({text, date, cname}: OneMessage) => {
    return (
        <div className={cname}>

            <p className="msg">{text}</p>
            <p className="date">{Client.numberToDateString(date)}</p>

        </div>
    )
}

export default MessageDiv