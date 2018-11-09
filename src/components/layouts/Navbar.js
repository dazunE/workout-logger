import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';
import { connect } from 'react-redux';

const NavBar = ( props ) => {

    const { auth , profile  } = props ;

    const links = auth.uid ? <SignedInLinks profile={ profile }/> : <SignedOutLinks/>;

    return(
        <nav className="navbar">
            <div className="navbar_inner">
                <Link to="/" className="brand">Gym Logger</Link>
                { links }
            </div>
        </nav>

    )
};

const mapStateToProps = ( state ) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar);
