import React from 'react'
import { NavigationUser } from '../../../Interfaces/NavigationInterfaces'
import FigureImage from '../../Common/FigureImage'
import blank from '../../../Images/blank.png'

const ChatUser = ({username, avatar}: NavigationUser) => {
    return (
        <section className="chat-user">

            <FigureImage source={avatar ?? blank} altTxt='Avatar' />
            <p>{username}</p>

        </section>
    )
}

export default ChatUser