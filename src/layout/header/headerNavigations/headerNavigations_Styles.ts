import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"


const DesktopNavigation = styled.nav`

   margin-right:140px;

   ul {
        display: flex;
        gap: 30px;

    }

@media ${theme.media.tablet} {
    display:none;
}

`

const MobileNavigation = styled.nav`
    display:none;

    @media screen and (max-width:900px) {
        display:block;
        margin-left:80vw;
    }

`




const BurgerButton = styled.button<{ isOpen: boolean }>`
    position:fixed;
    width: 50px;
    height:50px;
    z-index: 9999;
    top: 10px;


    span {
        display: block;
        position:absolute;
        width: 36px;
        height: 2px;
        background-color: black;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
        background-color:rgba(255, 255, 255, 0);

        `}

        &::before {
            content: "";
            width: 36px;
            height: 2px;
            background-color: black;
            position:absolute;
            transform:translateY(-10px);
            left:0;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(-45deg) translateY(0);
        `}

        }
        &::after {
            content: "";
            width: 36px;
            height: 2px;
            background-color: black;
            position:absolute;
            transform:translateY(10px);
            left:0;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);

        `}

        }
    }`

const MobileNavigationPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 9999;
    background-color: rgba(158, 34, 233, 0.7);
    display:flex;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: ${theme.animation.transition};


    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin: 80px 0 auto;
        transition: ${theme.animation.transition};
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateX(0);


`}

    `

const NavigationItems = styled.li`
    &:hover {
    background-color:${theme.colors.hoverNavigationcolor};
    transition: ${theme.animation.transition}

   }`




export const S = {
    DesktopNavigation,
    BurgerButton,
    MobileNavigation,
    MobileNavigationPopup,
    NavigationItems,
}