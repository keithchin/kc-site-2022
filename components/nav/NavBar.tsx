import React, { FC } from 'react';
import type { NextPage } from 'next';

import NavBarItem from './NavBarItem';
import { arrayBuffer } from 'stream/consumers';

const navBarItems = [
    {name : 'Bio', url : '/bio'},
    {name : 'Work', url: '/work'},
    {name: 'Contact', url: '/contact'},
    {name : 'Discography', url: '/disco'}
];

const NavBar: FC= () => {
    return (
        <>
            <nav>
                <ul className="nav">
                    {navBarItems.map(item => 
                        (<NavBarItem name={item.name} url={item.url} />)
                    )}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;