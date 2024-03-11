import { styled } from "styled-components";

type ContainerPropsType = {
    display?: string,
    justify?: string,
}

export const Container = styled.div<ContainerPropsType> `
    max-width:1440px;
    width:100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: ${props => props.display};
    justify-content: ${props => props.justify};

`