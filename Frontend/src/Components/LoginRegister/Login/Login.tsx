import React from 'react'
import '../../../css/LoginRegister.css'
import '../../../css/Login.css'
import InputDiv from '../InputDiv'
import HelperLinks from './HelperLinks'
import LogregWrap from '../LogregWrap'
import Client, { Aliases as a } from '../../../Functions/Client'
import fetchFunction from '../../../Functions/fetchFunction'
import UserContext, { PossibleUser } from '../../../Functions/UserContext'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const Login = () => {
    const user: PossibleUser = React.useContext(UserContext),
          n: NavigateFunction = useNavigate()

    React.useEffect(() => {
        if(user) n('/', { replace: true })
    }, [])


    const submitLogin = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const form: a.Form = e.target as a.Form,
              box = new Client.TextBox(),
              fetches = new Client.Fetches(),
              elements: a.Input[] = Array.from(form.elements as a.Inputs)


        fetches.disableButton(form)

        const [username, password, remember]: (string|boolean)[] = elements.map(x => x.type === 'checkbox' ? x.checked : x.value),
              bodyObj = {
                  username,
                  password, 
                  remember
              }

        await fetchFunction(
            {url: process.env.REACT_APP_USER_LOGIN!, type: 'POST', body: bodyObj},
            {position: 'containerWidth', appendTo: form},

            () => {
                box.setMessage = 'Successfully logged in'
                box.setClass = 'true'

                window.location.pathname = '/'
            },

            err => {
                box.setMessage = fetches.returnFetchErrorState(err).msg
                box.setClass = 'false'

                fetches.enableButton(form)
            },
            
            () => {
                box.initializeBox()
                   .removePreviousBox(form)
                   .appendTo(form, 2000, true)
            }
        )
    }


    if(!user)
    return (
        <LogregWrap submitFunc={submitLogin} redirectUrl='/register' header='Sign in' cname='login' redirectText='No account? Register in here'>

            <InputDiv cname='username' labelText='Username' inputType='text' />

            <InputDiv cname='password' labelText='Password' inputType='password' />
            <HelperLinks />

        </LogregWrap>
    )

    return <></>
}

export default Login