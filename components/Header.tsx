import React, { FC, useEffect, useRef } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../use-dimensions";

import NavBar from '../components/nav/NavBar'
import NavBarMobileToggle from '../components/nav/NavBarMobileToggle'
import NavBarMobile from '../components/nav/NavBarMobile'



const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 60px 60px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 60px 60px)",
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
                <a href="/" className="font-bold text-white mt-4 ml-6 mr-6">
                    <img src="/logo_keith.png" alt="Keith Chin Logo" className="icon__header"/>
                </a>
                <NavBar />
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                    className="nav-mobile"
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