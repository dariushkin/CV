import React from "react"
import { styled } from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle"
import { Icon } from "../../../components/icon/Icon";
import { IconContainer } from "../../../components/IconContainer";



export const Profile = () => {
    return (
        <StyledProfile>
            <IconContainer top="2%" left="0" right="50%">
            <Icon iconId={"profileIcon"} width={"24"} height={"24"} />
            </IconContainer>
            <SectionTitle>Profile</SectionTitle>
            <p>Junior Frontend Developer (not really yet) with no commercial experience, but with a genuine interest in web development. Several months of self-education in basic HTML, CSS, JS make me more confident in my choice to continue learning deeper these professional competencies.</p>
            <p>There is an old proverb that describes my goals for further learning front-end development:</p>
            <blockquote>
                <i>"We do hope, that all our initiatives will have their bright future. After all "you just have to keep putting one foot in front of the other."</i>
            </blockquote>
        </StyledProfile>
    )
}

const StyledProfile = styled.section`
position:relative;

`

