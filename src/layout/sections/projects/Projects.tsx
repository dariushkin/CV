import { styled } from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Navigation } from "../../../components/navigation/Navigation"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Project } from "./Project/Project"
import React from "react"
import ProgectImage1 from "../../../assets/images/projectImg1.jpg"
import ProgectImage2 from "../../../assets/images//projectImg2.jpg"
import ProgectImage3 from "../../../assets/images/projectImg3.jpg"
import { Icon } from "../../../components/icon/Icon";

export const Projects = () => {
    return (

        <StyledProjects>

                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper gap="20px" wrap="wrap">
                <Project title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={ProgectImage1} preViewLink={"#"} gitHubLink={"#"} />
                <Project title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={ProgectImage2} preViewLink={"#"} gitHubLink={"#"} />
                <Project title={"Project Tile goes here"} text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} src={ProgectImage3} preViewLink={"#"} gitHubLink={"#"} />
                </FlexWrapper>
        </StyledProjects>
    )
}

const StyledProjects = styled.section`
    width:100%;

`