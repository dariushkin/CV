/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react"
import styled from "styled-components"


export const Navigation = (props:{navigationItems: Array<string>}) => {
    return (
        <StyledNavigation>
            <ul>
        {props.navigationItems.map((item, index)=>{
            return(<li key={index}><a href="">{item}</a></li>)

        })}
            </ul>
        </StyledNavigation >
    )
}

const StyledNavigation = styled.nav `
   display: flex;
   gap: 30px;
`