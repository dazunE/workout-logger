import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {signIn} from '../../store/actions';

import Wrapper from '../styled/Wrapper';

class SignIn extends Component {

    state = {
        email: '',
        password: '',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);

    };


    render() {
        const { authError , auth } = this.props ;

        if( auth.uid ) return <Redirect to="/"/>

        return (
            <Wrapper>
                <div className="sign-in_wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <h5>Sign in to GymLogger</h5>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-control" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <div className="error">
                            { authError ? `<p>${ authError}</p>` :''}
                        </div>
                    </form>
                </div>
                <div>
                    <p>Hello Dasun</p>
                </div>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            signIn : ( creds ) => dispatch( signIn( creds ) )
    }
};

const mapStateToProps = ( state ) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(SignIn);
