import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Icon } from "../../../components/icon/Icon"
import { styled } from 'styled-components';
import { IconContainer } from '../../../components/IconContainer';



export const Contacts: React.FC = () => {
    return (
        <StyledContacts>
            <IconContainer top="2%" left="0" right="50%">
                <Icon iconId={"mailIcon"} width={"24"} height={"24"} />
            </IconContainer>
            <SectionTitle>
                Contacts
            </SectionTitle>
            <ul>
                <li><a href="mailto:darya95kom@mail.ru">E-mail: darya95kom@mail.ru</a></li>
                <li>Discord: Daria (@dariushkin)</li>
                <li><a href="https://github.com/dariushkin">Github: @dariushkin</a></li>
            </ul>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
 position: relative;
`

