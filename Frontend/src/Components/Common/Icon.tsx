import React from 'react'

interface IconType {
    children: JSX.Element
    cname?: string
    action?: React.MouseEventHandler
}

const Icon = ({children, cname, action}: IconType) => {
    return (
        <span onClick={action} className={cname ?? ''}>

            {children}

        </span>
    )
}

export default Icon