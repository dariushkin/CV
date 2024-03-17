
import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Skill } from "./skill/Skill"
import {S} from ".//Skills_Styles"
import React from "react"

const skillsData = [
    {
        iconId: "jsSkillIcon",
        skillDescription: "JS"

    },

    {
        iconId: "cssSkillIcon",
        skillDescription: "CSS"

    },
    {
        iconId: "htmlSkillIcon",
        skillDescription: "HTML"

    },

    {
        iconId: "reactSkillIcon",
        skillDescription: "React"

    }

]

export const Skills:React.FC = () => {
    return (
        <S.Skills id={"keySkills"}>
            <SectionTitle color="#8A30CD" weight="800">
                Key skills
            </SectionTitle>
            <FlexWrapper wrap="{wrap}">

                {skillsData.map((s: { iconId: string, skillDescription: string }, index) => {
                    return (
                        <Skill iconId={s.iconId}  key = {index}
                        skillDescription={s.skillDescription} />
                    )
                })}
            </FlexWrapper>
        </S.Skills>
    )
}

