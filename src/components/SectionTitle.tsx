import { styled } from "styled-components";
 type SectionTitlePropsType = {
    color?:string,
    weight?:string,
 }

export const SectionTitle = styled.h2<SectionTitlePropsType>`
    text-align: center;
    color: ${props => props.color};
    font-weight: ${props => props.weight};




`