/* eslint-disable jsx-a11y/anchor-is-valid */

import { styled } from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Navigation } from "../../components/navigation/Navigation"

const items = ["Profile", "Location","Contacts","Languages","Education","Key Skills","Projects",]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Navigation navigationItems={items} />
        </StyledHeader>
    )
}


const StyledHeader = styled.header `
   display: flex;
   justify-content: space-between;
`