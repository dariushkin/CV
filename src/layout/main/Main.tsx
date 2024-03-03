import { styled } from "styled-components";
import userpic from "../../assets/images/userpic.webp";
import { Profile } from "../sections/profile/Profile";
import { Contacts } from "../sections/contacts/Contacts";
import { Languages } from "../sections/languages/Languages";
import { Location } from "../sections/location/Location";
import { theme } from "../../styles/Theme";
import { Skills } from "../sections/skills/Skills";
import { Projects } from "../sections/projects/Projects";




export const Main = () => {
    return (

        <StyledMain>
                <StyledMainTitleContainer>
                    <p>Daria Komarova<h1>Front-end Developer</h1></p>
                </StyledMainTitleContainer>
                <StyledProfileContainer>
                    <StyledUserPic src={userpic} alt="userpic" width="300" height="300" />
                    <Profile />
                    <Contacts />
                    <Languages />
                    <Location />
                </StyledProfileContainer>
                <StyledMainInfoContainer>
                    <Skills />
                    <Projects />
                </StyledMainInfoContainer>
        </StyledMain>

    )

}

const StyledMain = styled.main`
    display:grid;
    width:100%;
    margin-top: 50px;

`

const StyledUserPic = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    object-fit:cover;
`

const StyledMainTitleContainer = styled.div`

    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-left: 120px;


`


const StyledProfileContainer = styled.div`
    max-width:450px;
    text-align:center;
    padding: 25px;
    background: linear-gradient(180deg, rgba(16, 237, 115, 0.808) 0%, rgba(16, 237, 152, 0.85) 5.33%, rgba(158, 34, 233, 0.85) 100%); 
    color: ${theme.colors.mainColor};

`


const StyledMainInfoContainer = styled.div`
    margin:120px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;

`