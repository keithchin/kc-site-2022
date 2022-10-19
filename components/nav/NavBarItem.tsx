import React , { FC }from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

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
                <Link href={props.url}>
                {props.name}

                </Link>
            </li>
        );
}

export default NavBarItem;