import { styled } from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"

const Project = styled.div`

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
    height: 10px;
    color: ${theme.colors.projectHoverColor};

`

const ProjectGitHubLink = styled.a`
     display:inline-block;
     height: 10px;
     color: ${theme.colors.projectHoverColor};
`

const Projects = styled.section`
    width:100%;

@media ${theme.media.tablet} {
    ${FlexWrapper} {
      justify-content: space-around;
      column-gap: 10px;

    }
}

`

export const S = {
    Project,
    ProjectImage,
    ProjectTitle,
    ProjectDescription,
    ProjectPreViewLink,
    ProjectGitHubLink,
    Projects,
}