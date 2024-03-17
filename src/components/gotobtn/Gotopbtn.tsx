import React from 'react';
import { styled } from 'styled-components';
import { Icon } from '../icon/Icon';
import { animateScroll as scroll } from "react-scroll"

export const Gotopbtn = () => {
    return (
        <StyledGoToBtn onClick = {() => {scroll.scrollToTop()}}>
            <Icon iconId={'goTopBtn'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />
        </StyledGoToBtn>
    );
};

const StyledGoToBtn = styled.button `
 padding: 8px;
 position: fixed;
 right: 30px;
 bottom: 30px;

`

