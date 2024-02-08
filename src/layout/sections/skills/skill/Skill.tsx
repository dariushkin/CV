import styled from "styled-components"
import { Icon } from "../../../../components/icon/Icon"

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
`

const SkillText = styled.h3`
    
`

 