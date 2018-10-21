import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Gym Logger</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>

    )
};

export default NavBar;
