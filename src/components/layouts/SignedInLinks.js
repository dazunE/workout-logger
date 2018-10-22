import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from "../../store/actions";

const SignedInLinks = ( props ) => {

    return(
        <ul className="nav justify-content-end">
            <li className="nav-item"><NavLink to="/" className="nav-link">New Log Item</NavLink></li>
            <li className="nav-item"><NavLink to="/create-workout" className="nav-link">New Workout</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link">All Workouts</NavLink></li>
            <li className="nav-item"><NavLink to="/" className="nav-link">Profile</NavLink></li>
            <li className="nav-item"><a onClick={ props.signOut } className="nav-link"> Logout</a></li>

        </ul>
    )
};

const mapDispatchToProps = ( dispatch ) => {
   return {
       signOut: () => dispatch( signOut())
   }
};

export default connect( null , mapDispatchToProps)(SignedInLinks);
