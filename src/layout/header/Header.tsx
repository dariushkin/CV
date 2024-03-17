/* eslint-disable jsx-a11y/anchor-is-valid */

import { Logo } from "../../components/logo/Logo"

import { Container } from "../../components/Container"
import { MobileNavigation } from "./headerNavigations/mobileNavigation/MobileNavigation"
import { S } from "../header/Header_Styles"
import React from "react"
import { DesktopNavigation } from "./headerNavigations/desktopNavigation/DesktopNavigation"


export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 900;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container>
                <S.HeaderWrapper>
                    <Logo />
                    {width < breakpoint ? <MobileNavigation />
                    : <DesktopNavigation />}
                </S.HeaderWrapper>
            </Container>
        </S.Header>
    )
}

