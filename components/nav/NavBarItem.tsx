import React, { FC } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion'

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
        <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 5 }}
        >
            <li className='nav__item'>
                <Link href={props.url}>
                    {props.name}

                </Link>
            </li>
        </motion.div>
    );
}

export default NavBarItem;