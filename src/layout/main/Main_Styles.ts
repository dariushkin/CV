import { styled } from "styled-components"
import { Container } from "../../components/Container"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"

const Main = styled.main`
    width:100%;
    margin-top: 50px;


@media ${theme.media.tablet} {
    margin-top: 0;

    ${Container} {
        padding: 0;
    }
}

`
const UserPic = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    object-fit:cover;
    object-position: left;

`

const MainTitleContainer = styled.div`
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

const ProfileContainer = styled.div`
    max-width:450px;
    text-align:center;
    padding: 25px;
    background: linear-gradient(180deg, rgba(16, 237, 115, 0.808) 0%, rgba(16, 237, 152, 0.85) 5.33%, rgba(158, 34, 233, 0.85) 100%); 
    color: ${theme.colors.mainColor};

    @media ${theme.media.tablet} {
        max-width:100vw;


}


`
const MainInfoContainer = styled.div`
    margin:120px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    @media ${theme.media.tablet} {
    margin: 30px 0 0 0;
    grid-column: 1 / 2;
    grid-row: 5 / 6;
}

`


export const S = {
    Main,
    UserPic,
    MainTitleContainer,
    ProfileContainer,
    MainInfoContainer,
}