import { styled } from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"

const Project = styled.div`
    background-color: #fff;
    width:30%;

    
    @media ${theme.media.tablet} {
        width:100%;


    }

`

const ProjectImage = styled.img`
    border-radius:10%;
    transition: ${theme.animation.transition};
    
    
    
    &:hover {
        border: 3px solid ${theme.colors.projectHoverColor};
        
    }
`

const ProjectTitle = styled.h3`
    text-align:center;
    ${font({ Fmax: 20, Fmin: 22 })}
 `

const ProjectDescription = styled.p`
    text-align:center;
    ${font({ Fmax: 14, Fmin: 12 })};

    @media ${theme.media.tablet} {

        text-align: justify;
    }

`

const ProjectPreViewLink = styled.a`
    display:inline-block;
    height: 10px;
    color: ${theme.colors.projectHoverColor};
    ${font({ Fmax: 12, Fmin: 10 })}

`

const ProjectGitHubLink = styled.a`
     display:inline-block;
     height: 10px;
     color: ${theme.colors.projectHoverColor};
     ${font({ Fmax: 12, Fmin: 10 })}
`

const Projects = styled.section`
    width:100%;


@media ${theme.media.tablet} {

    max-width:300px;
    max-height: 600px;
    overflow: hidden;
    margin: 0 auto;
  

    ${FlexWrapper} {

      justify-content: space-around;
      column-gap: 10px;
      flex-wrap: nowrap;

    }

    @media screen and (max-width: 413px) {
        max-height: 500px;
    }

}
`
const Slider = styled.div`
max-width: 500px;
border: 1px solid red;
@media ${theme.media.tablet} {}
`
const Pagination = styled.div`

 @media ${theme.media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

        span {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: ${theme.colors.gradientEndColor};
            border-radius: 50%;

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
    Slider,
    Pagination,
}