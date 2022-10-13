import React , { FC }from 'react';
import type { NextPage } from 'next';

interface INavBarItem {
    name: string;
    url: string,
}

const NavBarItem: FC<INavBarItem> = (props) => {
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
            <li className='nav__item'>
                <a href={props.url}>
                {props.name}

                </a>
            </li>
        );
}

export default NavBarItem;