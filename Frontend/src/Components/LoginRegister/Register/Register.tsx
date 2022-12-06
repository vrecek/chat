import React from 'react'
import '../../../css/LoginRegister.css'
import '../../../css/Register.css'
import InputDiv from '../InputDiv'
import LogregWrap from '../LogregWrap'
import ReCaptcha from 'react-google-recaptcha'
import fetchFunction from '../../../Functions/fetchFunction'
import Client, { Aliases as a} from '../../../Functions/Client'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import UserContext, { PossibleUser } from '../../../Functions/UserContext'

const Register = () => {
    const captchaRef = React.useRef<any>(null),
          n: NavigateFunction = useNavigate(),
          user: PossibleUser = React.useContext(UserContext)

          
    React.useEffect(() => {
        if(user) n('/', { replace: true })
    }, [])
    

    const submitRegister = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()

        const form: HTMLFormElement = e.target as HTMLFormElement,
              box = new Client.TextBox(),
              fetches = new Client.Fetches(),
              elements: a.Input[] = Array.from(form.elements as a.Inputs) 


        elements.pop()

        const [username, mail, pass, passConf, captcha] = elements.map(x => x.value),
               bodyObj = {
                   username,
                   mail,
                   pass,
                   passConf,
                   captcha
               }


        fetches.disableButton(form)
        

        await fetchFunction(
            {url: process.env.REACT_APP_USER_REGISTER!, type: 'POST', body: bodyObj},
            {position: 'containerWidth', appendTo: form},

            () => {
                box.setMessage = 'Successfully created. You can log in now'
                box.setClass = 'true'

                for(let input of elements) input.value = ''

                setTimeout(() => n('/sign-in'), 1500)
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


                captchaRef.current!.reset()
            }
        )
    }

    
    if(!user)
    return (
        <LogregWrap submitFunc={submitRegister} header='Register' cname='register' redirectUrl='/sign-in' redirectText='Got account? Sign in here'>

            <InputDiv labelText='Username' inputType='text' />
            <InputDiv labelText='Mail' inputType='text' />
            <InputDiv labelText='Password' inputType='password' />
            <InputDiv labelText='Confirm password' inputType='password' />
            <ReCaptcha
                sitekey={process.env.REACT_APP_RECAPTCHA_CLIENT!}
                ref={captchaRef}
            />

        </LogregWrap>
    )

    return <></>
}

export default Register