import { styled } from "styled-components";
import userpic from '../../../assets/images/userpic.webp'
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
    <StyledMain>
        <FlexWrapper align={"center"} justify={"space-around"}>
            <p className="main-title">Daria Komarova<h1 className="title-style">Junior Front-end Developer</h1></p>
            <StyledUserPic src={userpic} alt="" width="200" height="200" />
        </FlexWrapper>
        </StyledMain>
    )

}

const StyledMain = styled.div `
    min-height: 100vh;
    background-color: #f17070;

`

const StyledUserPic = styled.img`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    object-fit:cover;
`