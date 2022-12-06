import React from 'react'
import { Link } from 'react-router-dom'
import { AccountCredentials } from '../../Interfaces/LoginRegisterInterfaces'
import Button from '../Common/Button'

const LogregWrap = ({children, redirectUrl, redirectText, header, submitFunc, cname}: AccountCredentials) => {
    return (
        <>

            <form onSubmit={submitFunc} className={cname}>

                <h1>{header}</h1>

                <section className="inputs">

                    {children}

                </section>

                <Button text={header} />
                <Link to={redirectUrl}>{redirectText}</Link>

            </form>

        </>
    )
}

export default LogregWrap