import { styled } from "styled-components";

type IconContainerPropsType = {
    top?:string;
    left?:string;
    right?:string;
    bottom?:string;
}



export const IconContainer = styled.div<IconContainerPropsType>`
position:absolute;
top: ${props => props.top};
left: ${props => props.left};
right:${props => props.right};
bottom:${props => props.bottom};


`