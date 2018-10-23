import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul className="nav justify-content-end">
            <li className="nav-item"><NavLink to="/" className="nav-link">About Logger</NavLink></li>
            <li className="nav-item"><NavLink to="/signup" className="nav-link">Signup</NavLink></li>
        </ul>
    )
};

export default SignedOutLinks;
