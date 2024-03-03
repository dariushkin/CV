import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"
import React from "react"

type SkillPropsType = {
    iconId: string
    skillDescription: string
}


export const Skill = (props:SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
            <SkillText>{props.skillDescription}</SkillText>
        </StyledSkill>
    )
}

const StyledSkill = styled.div`
width:33%;
display:flex;
text-align:center;
align-items:center;
flex-direction:column;
`

const SkillText = styled.h3`
font-size:0.9em;


`

 