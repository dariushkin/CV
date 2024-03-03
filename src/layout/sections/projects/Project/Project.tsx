import { styled } from "styled-components"
import { FlexWrapper } from "../../../../components/FlexWrapper"


type ProjectPropsType = {
    title: string
    text: string
    src: string
    preViewLink: string,
    gitHubLink: string,
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <FlexWrapper direction="column">
            <ProjectTitle>{props.title}</ProjectTitle>
                <ProjectImage src={props.src} alt="projectImage"></ProjectImage>
                <ProjectDescription>{props.text}</ProjectDescription>
                <ProjectPreViewLink href="{props.preViewLink}">Live Preview</ProjectPreViewLink>
                <ProjectGitHubLink href="{props.gitHubLink}">View Code</ProjectGitHubLink>
            </FlexWrapper>


        </StyledProject>
    )
}

const StyledProject = styled.div`

    background-color: #fff;
    width:30%;
`

const ProjectImage = styled.img`
    border-radius:10%;
`

const ProjectTitle = styled.h3`
    text-align:center;
    font-size: 0.9em;
 `

const ProjectDescription = styled.p`
    text-align:center;
    font-size: 0.7em;
`

const ProjectPreViewLink = styled.a`
    display:inline-block;

`

const ProjectGitHubLink = styled.a`
     display:inline-block;
`