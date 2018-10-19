import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';

const NavBar = () => {
    return(
        <nav className="main-nav">
            <div className="container">
                <Link to="/" className="logo">Gym Logger</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
};

export default NavBar;
