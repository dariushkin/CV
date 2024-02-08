import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>Key skills</SectionTitle>
            <FlexWrapper wrap="{wrap}">
                <Skill iconId={"jsSkillIcon"}  skillDescription={"JS"}/>
                <Skill iconId ={"cssSkillIcon"} skillDescription={"CSS"} />
                <Skill iconId ={"htmlSkillIcon"} skillDescription={"HTML"}/>
                <Skill iconId ={"githubIcon"} skillDescription={"Github"}/>
                <Skill iconId ={"reactSkillIcon"} skillDescription={"React"}/>
            </FlexWrapper>

        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    min-height: 100vh;
    background-color: #7afc83;

`