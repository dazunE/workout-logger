import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';
import { connect } from 'react-redux';

const NavBar = ( props ) => {

    const { auth } = props ;

    const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>;

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand">Gym Logger</Link>
                { links }
            </div>
        </nav>

    )
};

const mapStateToProps = ( state ) => {

    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(NavBar);
