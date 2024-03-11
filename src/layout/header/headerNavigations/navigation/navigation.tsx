/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { theme } from '../../../../styles/Theme';
import { styled } from 'styled-components';

export const Navigation: React.FC<{ navigationItems: Array<string> }> = (props: { navigationItems: Array<string> }) => {
    return (
        <ul>
            {props.navigationItems.map((item, index) => {
                return (

                    <SlyledNavigationItems key={index}><a href="">{item}</a></SlyledNavigationItems>
                )
            })}
        </ul>
    );
};


const SlyledNavigationItems = styled.li`
    &:hover {
    background-color:${theme.colors.hoverNavigationcolor};
   }

`
