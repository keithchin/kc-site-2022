import { FC } from "react";
import { motion } from "framer-motion";
import Link from 'next/link'

interface INavBarItem {
    name: string;
    url: string,
}
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const NavBarMobileItem: FC<INavBarItem> = (props) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='nav-mobile__item'
        >
            {/* <li className='nav-mobile__item'> */}
            <Link href={props.url}>
                {props.name}

            </Link>
            {/* </li> */}
        </motion.li>
    );
};

export default NavBarMobileItem;