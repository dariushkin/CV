
import { SectionTitle } from "../../../components/SectionTitle"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Project } from "./Project/Project"
import ProgectImage1 from "../../../assets/images/projectImg1.jpg"
import ProgectImage2 from "../../../assets/images//projectImg2.jpg"
import ProgectImage3 from "../../../assets/images/projectImg3.jpg"
import {S} from "./Projects_Styles"



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


export const Projects: React.FC = () => {
    return (

        <S.Projects>
            <SectionTitle color="#8A30CD" weight="800">Projects</SectionTitle>
            <FlexWrapper gap="20px" wrap="wrap">
                {projectsData.map((p: {title: string, text: string, src: string, preViewLink: string, gitHubLink: string,}, index) => {
                    return (<Project title={p.title} text={p.text} src={p.src} preViewLink={p.preViewLink} gitHubLink={p.gitHubLink} key = {index}/>)
                })}
            </FlexWrapper>
        </S.Projects>
    )
}

