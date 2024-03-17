/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { S } from '../headerNavigations_Styles';
import { Link } from 'react-scroll';

const items = [

    {
        title: "Profile",
        href: "profile"
    },
    {
        title: "Location",
        href: "location"
    },
    {
        title: "Contacts",
        href: "contacts"
    },
    {
        title: "Languages",
        href: "languages"
    },
    
    {
        title: "Key Skills",
        href: "keySkills"
    },
    {
        title: "Projects",
        href: "projects"
    },

]

export const Navigation: React.FC = () => {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <S.NavigationItems key={index}>
                        <Link to={item.href} smooth={true}>{item.title}</Link>
                    </S.NavigationItems>
                )
            })}
        </ul>
    );
};


