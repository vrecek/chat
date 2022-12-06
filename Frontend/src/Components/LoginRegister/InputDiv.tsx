import React from 'react'
import { Aliases } from '../../Functions/Client'
import { InputContainer } from '../../Interfaces/LoginRegisterInterfaces'

const InputDiv = ({labelText, inputType, cname}: InputContainer) => {
    const changeEvent = (e: React.ChangeEvent): void => {
        const input: Aliases.Input = e.target as Aliases.Input,
              label: Aliases.Elem = input.parentElement!.children[0] as Aliases.Elem,
              {value} = input

        if(input.type === 'checkbox')
            return
            

        value.length
            ? label.style.display = 'none'
            : label.style.display = 'block'
    }

    return (
        <div className={`input-div ${cname}`}>

            <label htmlFor={labelText}>{labelText}</label>
            <input onChange={changeEvent} id={labelText} type={inputType} spellCheck='false' />

        </div>
    )
}

export default InputDiv