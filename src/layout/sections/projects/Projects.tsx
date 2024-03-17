
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"

import ProgectImage1 from "../../../assets/images/projectImg1.jpg"
import ProgectImage2 from "../../../assets/images//projectImg2.jpg"
import ProgectImage3 from "../../../assets/images/projectImg3.jpg"
import { S } from './Projects_Styles';
import { Project } from './Project/Project';
import { styled } from "styled-components"
import { theme } from "../../../styles/Theme"

const projectsData = [

    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: ProgectImage1,
        preViewLink: "#",
        gitHubLink: "#"
    },

    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: ProgectImage2,
        preViewLink: "#",
        gitHubLink: "#"
    },

    {
        title: "Project Tile goes here",
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        src: ProgectImage3,
        preViewLink: "#",
        gitHubLink: "#"
    },

]

export const Projects = () => {
    return (
        <S.Projects id={"projects"}>
            <SectionTitle color="#8A30CD" weight="800">Projects</SectionTitle>
            <FlexWrapper gap="20px" wrap="wrap">
                {projectsData.map((p: { title: string; text: string; src: string; preViewLink: string; gitHubLink: string }, index) => {
                    return (<Project title={p.title} text={p.text} src={p.src} preViewLink={p.preViewLink} gitHubLink={p.gitHubLink} key={index} />)
                })}
            </FlexWrapper>
            <Slider />
        </S.Projects>

    )
}

const Slider: React.FC = () => {
    return (
        <StyledSlider>
            <Pagination>
            <span></span>
            <span></span>
            <span></span>

            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`

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

