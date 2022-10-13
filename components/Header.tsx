import React, { FC } from 'react';
import type { NextPage } from 'next'

import NavBar from '../components/nav/NavBar'

const Header: FC= () => {
    return (
        <header>
            <NavBar />
        </header>
    )
}

export default Header;