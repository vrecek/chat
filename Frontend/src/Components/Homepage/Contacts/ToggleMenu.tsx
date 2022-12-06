import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Icon from '../../Common/Icon'

const ToggleMenu = () => {
    const toggleAside = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement,
              menu: HTMLElement = t.parentElement! as HTMLElement,
              svg: HTMLElement = t.children[0] as HTMLElement


        t.classList.toggle('active')

        if(t.classList.contains('active')) {
            menu.style.translate = '-100% 0'
            t.style.translate = '100% -50%'
            svg.style.rotate = '180deg'

            return
        }

        t.style.translate = '0 -50%'
        svg.style.rotate = '0deg'
        menu.style.translate = '0 0'
    }

    return (
        <Icon action={toggleAside} cname='toggle-menu'>
            <BiArrowBack />
        </Icon>
    )
}

export default ToggleMenu