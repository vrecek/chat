import React from 'react'
import InputDiv from '../InputDiv'

const HelperLinks = () => {
    return (
        <section className="links">

            <InputDiv labelText='Remember me' inputType='checkbox' cname='checkbox' />
            <p className="forgot">Forgot password?</p>

        </section>
    )
}

export default HelperLinks