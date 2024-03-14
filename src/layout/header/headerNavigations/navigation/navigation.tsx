/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { S } from '../headerNavigations_Styles';

export const Navigation: React.FC<{ navigationItems: Array<string> }> = (props: { navigationItems: Array<string> }) => {
    return (
        <ul>
            {props.navigationItems.map((item, index) => {
                return (

                    <S.NavigationItems key={index}><a href="">{item}</a></S.NavigationItems>
                )
            })}
        </ul>
    );
};


