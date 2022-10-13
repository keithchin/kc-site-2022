import React , { FC }from 'react';
import type { NextPage } from 'next';

interface INavBarItem {
    name: string;
}

const NavBarItem: FC<INavBarItem> = ({name}) => {
    // if(props.isIcon) {
    //     return (
    //         <a href={props.url}><i</a>
    //     );
    // } else {
    //     return (
    //         <li>{props.name}</li>
    //     );
    // }
        return (
            <li className='nav__item'>{name}</li>
        );
}

export default NavBarItem;