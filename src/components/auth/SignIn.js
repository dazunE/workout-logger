import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {signIn} from '../../store/actions';

import Background from '../../assests/images/main-bg-2.jpg';

import BackgroundImg from '../styled/Background';
import FormWrapper from '../styled/forms/formWrapper';
import Form from '../styled/forms/Forms';
import Typo from '../styled/headings/Title';


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

            <BackgroundImg columns="3fr 2fr" url={Background}>
                    <FormWrapper middle>
                        <Form middle onSubmit={this.handleSubmit}>
                            <Typo size='36px'>
                                Sign in to GymLogger
                            </Typo>
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
                        </Form>
                    </FormWrapper>
                    <div>
                        <p>Hello Dasun</p>
                    </div>
            </BackgroundImg>
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
