import React from 'react';
import './css/index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/LoginRegister/Login/Login';
import Register from './Components/LoginRegister/Register/Register';
import fetchFunction, { DefaultLoadingState } from './Functions/fetchFunction';
import { Aliases as a, CustomTypes } from './Functions/Client';
import UserType from './Interfaces/UserType';
import UserContext from './Functions/UserContext';
import Error from './Components/Error/Error';


function App() {
    /*
        in the server: emit and recieve in a contacts list (for example)
        then check if chat container exists
        if yes emit msg (old)

        to show new msg even if there s no contact specified
    */
    const [user, setUser] = React.useState<CustomTypes.LoadingState<UserType>>(DefaultLoadingState)


    React.useEffect(() => {
        fetchFunction<UserType>(
            {url: process.env.REACT_APP_USER_LOGGED!, type: 'GET'},
            {position: 'fixed', appendTo: document.body},

            user => {
                setUser({
                    finished: true,
                    data: user,
                    error: null
                })
            },

            () => {
                setUser({
                    finished: true,
                    data: null,
                    error: 'Could not fetch logged user'
                })
            }
        )
    }, [])


    if(user.finished)
    return (
        <div className="App">

            <Router>

                <UserContext.Provider value={user.data}>

                    <Routes>

                        <Route path='/' element={<Homepage />} />

                        <Route path='/sign-in' element={<Login />} />
                        <Route path='/register' element={<Register />} />

                        <Route path='/error' element={<Error />} />

                    </Routes>

                </UserContext.Provider>

            </Router>

        </div>
    )

    return <></>
}

export default App
