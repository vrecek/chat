import React from 'react'
import UserContext from '../../../../../Functions/UserContext'
import UserType from '../../../../../Interfaces/UserType'
import FigureImage from '../../../../Common/FigureImage'
import UserDetails from './UserDetails'
import blank from '../../../../../Images/blank.png'

const UserSection = () => {
    const user: UserType = React.useContext(UserContext)!

    
    return (
        <section className="user-section">

            <div className="logged">

                <FigureImage source={user.avatar ?? blank} altTxt='Avatar' />

                <UserDetails username={user.username} />

            </div>

        </section>
    )
}

export default UserSection