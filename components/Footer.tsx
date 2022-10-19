import React, { FC } from 'react';
import type { NextPage } from 'next'

import NavBar from '../components/nav/NavBar'

const d = new Date();
const year = d.getFullYear();

const Footer: FC = () => {
    return (
        <footer className='bg-footer'>
            <div className="footer">Made with Next.js by Keith Chin. {year} </div>
        </footer>
    )
}

export default Footer;