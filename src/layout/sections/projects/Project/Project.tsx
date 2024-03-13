
import React from "react"
import { FlexWrapper } from "../../../../components/FlexWrapper"
import {S} from "../Projects_Styles"



type ProjectPropsType = {
    title: string,
    text: string,
    src: string,
    preViewLink: string,
    gitHubLink: string,
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <FlexWrapper direction="column">
                <S.ProjectTitle>{props.title}</S.ProjectTitle>
                <S.ProjectImage src={props.src} alt="projectImage"></S.ProjectImage>
                <S.ProjectDescription>{props.text}</S.ProjectDescription>
                <FlexWrapper justify="space-around">
                    <S.ProjectPreViewLink href="{props.preViewLink}">Live Preview</S.ProjectPreViewLink>
                    <S.ProjectGitHubLink href="{props.gitHubLink}">View Code</S.ProjectGitHubLink>

                </FlexWrapper>
            </FlexWrapper>
        </S.Project>
    )
}

