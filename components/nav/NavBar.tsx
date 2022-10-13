import React, { FC } from 'react';
import type { NextPage } from 'next';

import NavBarItem from './NavBarItem';
import { arrayBuffer } from 'stream/consumers';

const names = ['Bio', 'Work', 'Contact', 'Discography'];
// for(let i = 0; i < 6; i++) {
//     navBarItems.push(<NavBarItem name=""/>)
// }

const navBarItems = [
    {name : 'Bio'},
    {name : 'Work'},
    {name: 'Contact'},
    {name : 'Discography'}
];

const NavBar: FC= () => {
    return (
        <>
            <nav>
                <ul className="nav">
                    {navBarItems.map(item => 
                        (<NavBarItem name={item.name} />)
                    )}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;