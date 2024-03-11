import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from '../../../components/icon/Icon';
import styled from 'styled-components';
import { IconContainer } from '../../../components/IconContainer';


export const Location = () => {
    return (

        <StyledLocation>
            <IconContainer top="2%" left="0" right="50%">
            <Icon iconId={"locationIcon"} width={"24"} height={"24"}/>
            </IconContainer>
            <SectionTitle>
                Location
                </SectionTitle>
            <p>Russia, Moscow</p>
        </StyledLocation>


    );
};

const StyledLocation = styled.div `
    position: relative;
`
