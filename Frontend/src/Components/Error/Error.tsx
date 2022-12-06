import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import '../../css/Error.css'
import { ErrorState } from '../../Interfaces/ErrorInterfaces'
import Button from '../Common/Button'

const Error = () => {
    const state: ErrorState = useLocation().state as ErrorState,
          n: NavigateFunction = useNavigate()

    
    React.useEffect(() => {
        if(!state) n('/', { replace: true })
    }, [])


    return (
        <main className="error">

            <h1>{state?.msg}</h1>
            <h2>{state?.code}</h2>

            <Button action={() => window.location.pathname = '/'} text='Back to homepage' />

        </main>
    )

}

export default Error