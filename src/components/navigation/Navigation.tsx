/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import styled from "styled-components"
export const Navigation = () => {
    return (
        <StyledNavigation>
            <ul>
                <li><a href="">Profile</a></li>
                <li><a href="">Location</a></li>
                <li><a href="">Contacts</a></li>
                <li><a href="">Languages</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">Key Skills</a></li>
                <li><a href="">Projects</a></li>
            </ul>
        </StyledNavigation >
    )
}

const StyledNavigation = styled.nav `
   display: flex;
   gap: 30px;
`