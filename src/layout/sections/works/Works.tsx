import { styled } from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Navigation } from "../../../components/navigation/Navigation"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Work } from "./work/Work"

const worksItems = ["CV", "Tic Tac Toe",]

export const Works = () => {
    return (

        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <Navigation navigationItems={worksItems} />
            <FlexWrapper>
                <Work title={""} text={""} src={""} />
                <Work title={""} text={""} src={""} />
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    min-height: 100vh;

`