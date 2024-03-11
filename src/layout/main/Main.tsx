import { styled } from "styled-components";
import userpic from "../../assets/images/userpic.webp";
import { Profile } from "../sections/profile/Profile";
import { Contacts } from "../sections/contacts/Contacts";
import { Languages } from "../sections/languages/Languages";
import { Location } from "../sections/location/Location";
import { theme } from "../../styles/Theme";
import { Skills } from "../sections/skills/Skills";
import { Projects } from "../sections/projects/Projects";
import { font } from "../../styles/Common";
import { Container } from "../../components/Container";




export const Main = () => {
    return (

        <StyledMain>
            <Container display="grid">
                <StyledMainTitleContainer>
                    <p>Daria Komarova<h1>Front-end Developer</h1></p>
                </StyledMainTitleContainer>
                <StyledProfileContainer>
                    <StyledUserPic src={userpic} alt="userpic" width="200" height="200" />
                    <Profile />
                    <Contacts />
                    <Languages />
                    <Location />
                </StyledProfileContainer>
                <StyledMainInfoContainer>
                    <Skills />
                    <Projects />
                </StyledMainInfoContainer>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.main`
    width:100%;
    margin-top: 50px;


@media ${theme.media.tablet} {
    margin-top: 0;

    ${Container} {
        padding: 0;
    }
}

`
const StyledUserPic = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    object-fit:cover;
    object-position: left;

`

const StyledMainTitleContainer = styled.div`
    ${font({ Fmax: 18, Fmin: 10 })};
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-left: 120px;

@media ${theme.media.tablet} {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-left:10px;


}
`

const StyledProfileContainer = styled.div`
    max-width:450px;
    text-align:center;
    padding: 25px;
    background: linear-gradient(180deg, rgba(16, 237, 115, 0.808) 0%, rgba(16, 237, 152, 0.85) 5.33%, rgba(158, 34, 233, 0.85) 100%); 
    color: ${theme.colors.mainColor};

    @media ${theme.media.tablet} {
        max-width:100vw;




}
`
const StyledMainInfoContainer = styled.div`
    margin:120px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    @media ${theme.media.tablet} {
    margin: 30px 0 0 0;
    grid-column: 1 / 2;
    grid-row: 5 / 6;
}

`