import { styled } from "styled-components"


type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props:WorkPropsType) => {
    return (
        <StyledWork>
            <WorkTitle>{props.title}</WorkTitle>
            <WorkImage src-={props.src}></WorkImage>
            <WorkText>{props.text}</WorkText>
        </StyledWork>
    )
}

const StyledWork = styled.div`
    background-color: #fff;
`

const WorkImage = styled.img`
    
`

const WorkTitle = styled.h3`

 `

const WorkText = styled.p `
    
`