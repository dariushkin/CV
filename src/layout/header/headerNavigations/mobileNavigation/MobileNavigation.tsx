


import React, { useState } from "react";
import {S} from "../headerNavigations_Styles"
import { Navigation } from "../navigation/Navigation"


export const MobileNavigation: React.FC<{ navigationItems: Array<string> }> = (props: { navigationItems: Array<string> }) => {

   const [menuIsOpen, setMenuIsOpen] = useState(false)
   const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (

        <S.MobileNavigation>

            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileNavigationPopup isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen (false)} }>
                <Navigation navigationItems={props.navigationItems}/>
            </S.MobileNavigationPopup>

        </S.MobileNavigation>
    );
};

