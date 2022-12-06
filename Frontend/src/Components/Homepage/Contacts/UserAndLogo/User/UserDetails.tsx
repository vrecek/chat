import React from 'react'
import fetchFunction from '../../../../../Functions/fetchFunction'
import { LoggedUserDetails } from '../../../../../Interfaces/LeftsideInterfaces'

const UserDetails = ({username}: LoggedUserDetails) => {
    const logoutUser = async (): Promise<void> => {
        await fetchFunction(
            {url: process.env.REACT_APP_USER_LOGOUT!, type: 'POST'},
            {position: 'fixed', appendTo: document.body},

            () => {
                window.location.pathname = '/'
            },

            () => {}
        )
    }

    return (
        <div>

            <p className="name">{username}</p>
            <p onClick={logoutUser} className="logout">Logout</p>
            
        </div>
    )
}

export default UserDetails