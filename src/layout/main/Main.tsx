
import userpic from "../../assets/images/userpic.webp";
import { Profile } from "../sections/profile/Profile";
import { Contacts } from "../sections/contacts/Contacts";
import { Languages } from "../sections/languages/Languages";
import { Location } from "../sections/location/Location";
import { Skills } from "../sections/skills/Skills";
import { Projects } from "../sections/projects/Projects";
import { Container } from "../../components/Container";
import { S } from "../main/Main_Styles"
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (

        <S.Main id={"home"}>
            <Container display="grid">
                <S.MainTitleContainer>
                    
                    <h1>
                    <span>Daria Komarova</span>
                        <Typewriter
                            options={{
                                strings: ["Frontend developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </S.MainTitleContainer>
                <S.ProfileContainer>
                    <S.UserPic src={userpic} alt="userpic" width="200" height="200" />
                    <Profile />
                    <Contacts />
                    <Languages />
                    <Location />
                </S.ProfileContainer>
                <S.MainInfoContainer>
                    <Skills />
                    <Projects />
                </S.MainInfoContainer>
            </Container>
        </S.Main>
    )
}

