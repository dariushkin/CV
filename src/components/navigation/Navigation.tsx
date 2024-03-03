/* eslint-disable jsx-a11y/anchor-is-valid */

import styled from "styled-components"
import { theme } from "../../styles/Theme"




export const Navigation = (props: { navigationItems: Array<string> }) => {
    return (

        <ul>
            <StyledNavigation>
                {props.navigationItems.map((item, index) => {
                    return (

                        <SlyledNavigationItems key={index}><a href="">{item}</a></SlyledNavigationItems>
                    )
                })}
            </StyledNavigation >
        </ul>

    )
}

const StyledNavigation = styled.nav`
   display: flex;
   gap: 30px;
   margin-right:140px


`

const SlyledNavigationItems = styled.li`
    &:hover {
    background-color:${theme.colors.hoverNavigationcolor};
   }

`
