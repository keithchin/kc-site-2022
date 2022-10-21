import React, { FC } from 'react';
import type { NextPage } from 'next';

import NavBarMobileItem from './NavBarMobileItem';
import { motion } from "framer-motion";


const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};
const navBarItems = [
    { name: 'Home', url: '/' },
    { name: 'Bio', url: '/bio' },
    { name: 'Work', url: '#work' },
    { name: 'Contact', url: '#contact' },
    { name: 'Discography', url: '#disco' }
];

const NavBar: FC = () => {
    return (
        <>
            <motion.ul variants={variants} className="nav-mobile">
                {navBarItems.map(item =>
                    (<NavBarMobileItem name={item.name} url={item.url} />)
                )}
            </motion.ul>
        </>
    )
}

export default NavBar;