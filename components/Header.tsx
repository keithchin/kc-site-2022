import React, { FC, useEffect, useRef } from 'react';
import type { NextPage } from 'next'
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../use-dimensions";

import NavBar from '../components/nav/NavBar'
import NavBarMobileToggle from '../components/nav/NavBarMobileToggle'
import NavBarMobile from '../components/nav/NavBarMobile'



const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
const Header: FC = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    return (
        <header id="header">
            <div className="flex justify-between">
                {/* <NavBar /> */}
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                >
                    <motion.div className="nav-mobile__bg" variants={sidebar} />
                    <NavBarMobile />
                    <NavBarMobileToggle toggle={() => toggleOpen()} />
                </motion.nav>
            </div>
        </header>
    )
}

export default Header;