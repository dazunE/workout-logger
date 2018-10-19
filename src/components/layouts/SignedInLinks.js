import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <ul className="right">
            <NavLink to="/">New Log Item</NavLink>
            <NavLink to="/">New Workout</NavLink>
            <NavLink to="/">All Workouts</NavLink>
            <NavLink to="/">Profile</NavLink>
            <NavLink to="/">Logout</NavLink>
        </ul>
    )
};

export default SignedInLinks;
