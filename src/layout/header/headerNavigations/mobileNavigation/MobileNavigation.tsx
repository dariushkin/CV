

import { useState } from "react"
import {S} from "../headerNavigations_Styles"
import { Navigation } from "../navigation/Navigation"


export const MobileNavigation: React.FC<{ navigationItems: Array<string> }> = (props: { navigationItems: Array<string> }) => {
   
    const [menuIsOpen, setmenuIsOpen ] = useState(false)
    const onBurgerButtonClick  =  () => {
        setmenuIsOpen(!menuIsOpen)}
    return (

        <S.MobileNavigation>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerButtonClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileNavigationPopup isOpen={menuIsOpen}>
                <Navigation navigationItems={props.navigationItems} />
            </S.MobileNavigationPopup>
        </S.MobileNavigation>
    )
}

