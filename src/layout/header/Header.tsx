/* eslint-disable jsx-a11y/anchor-is-valid */

import { styled } from "styled-components"
import { Logo } from "../../components/Logo"
import { Navigation } from "../../components/navigation/Navigation"

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Navigation />
        </StyledHeader>
    )
}


const StyledHeader = styled.header `
   display: flex;
   justify-content: space-between;
`