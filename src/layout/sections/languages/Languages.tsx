
import React from "react";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from '../../../components/SectionTitle';
import { styled } from 'styled-components';
import { IconContainer } from "../../../components/IconContainer";


export const Languages: React.FC = () => {
    return (

        <StyledLanguages>
            <IconContainer top="2%" left="0" right="55%">
                <Icon iconId={"langIcon"} width={"24"} height={"24"} />
            </IconContainer>
            <SectionTitle>
                Languages
            </SectionTitle>
            <ul>
                <li>Russian - Native speaker</li>
                <li >English - A2 level</li>
            </ul>
        </StyledLanguages>
    );
};

const StyledLanguages = styled.div`
    position:relative;
`