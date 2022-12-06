import React from 'react'

export interface IButton {
   text: string
   cname?: string
   additional?: JSX.Element
   action?: React.MouseEventHandler
}

const Button = ({action, additional, cname, text}: IButton) => {
   const blank = ()=>{},
         styles: React.CSSProperties = {
            pointerEvents: 'none'
         }
   
         
   return (
      <button onClick={action ?? blank} className={cname ?? ''}>

         <label style={styles}>{text}</label>
         {
            additional && <span style={styles}>{additional}</span>
         }

      </button>
   )
}

export default Button