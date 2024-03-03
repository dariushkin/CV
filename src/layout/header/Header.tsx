/* eslint-disable jsx-a11y/anchor-is-valid */

import { styled } from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Navigation } from "../../components/navigation/Navigation"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { theme } from "../../styles/Theme"

const items = ["Profile", "Location", "Contacts", "Languages", "Education", "Key Skills", "Projects",]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align="center" >
                        <Logo />

                    <Navigation navigationItems={items} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}


const StyledHeader = styled.header`

margin-top:10px;


 a {
    color: ${theme.colors.textColor}
}

`