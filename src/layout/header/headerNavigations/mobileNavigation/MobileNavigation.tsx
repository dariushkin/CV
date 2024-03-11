
import styled, { css } from "styled-components"
import { Navigation } from "../navigation/navigation"




export const MobileNavigation: React.FC<{ navigationItems: Array<string> }> = (props: { navigationItems: Array<string> }) => {
    return (

        <StyledMobileNavigation>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileNavigationPopup isOpen={false}>
                <Navigation navigationItems={props.navigationItems} />
            </MobileNavigationPopup>
        </StyledMobileNavigation>
    )
}

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
    }
`

const StyledMobileNavigation = styled.nav`


@media screen and (max-width:768px) {
    margin-left:75vw;
   }

`

const MobileNavigationPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 9999;
    background-color: rgba(158, 34, 233, 0.9);
    display:none;

${props => props.isOpen && css<{ isOpen: boolean }>`
    display:flex;
    justify-content: center;
    align-items: center;


`}

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-right:140px;

}

`
