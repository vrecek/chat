import React from 'react'
import { DisplayContent, Menu } from '../../../../Interfaces/LeftsideInterfaces'

const SelectMenu = ({contactsLen, invitesLen, setDisplay, setConversation}: Menu) => {

    const changeContent = (e: React.MouseEvent, content: DisplayContent): void => {
        const t: HTMLElement = e.target as HTMLElement,
              paragraphs: Element[] = Array.from(t.parentElement!.children)

            
        for(let x of paragraphs) x.className = ''
        t.className = 'active'

        if(content === 'invites')
            setConversation(null)

            
        setDisplay(content)
    }


    return (
        <section className="select-menu">

            <p className='active' onClick={(e) => changeContent(e, 'contacts')}>
                Contacts (<span>{contactsLen}</span>)
            </p>

            <p onClick={(e) => changeContent(e, 'invites')}>
                Invites (<span>{invitesLen}</span>)
            </p>

        </section>
    )
}

export default SelectMenu