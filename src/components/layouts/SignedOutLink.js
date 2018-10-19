import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul className="right">
            <NavLink to="/">About Logger</NavLink>
            <NavLink to="/">Signup</NavLink>
            <NavLink to="/">Login</NavLink>
        </ul>
    )
};

export default SignedOutLinks;
