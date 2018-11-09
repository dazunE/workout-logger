import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {signIn} from '../../store/actions';
import { createGlobalStyle } from 'styled-components';

import Background from '../../assests/images/main-bg-2.jpg';

import BackgroundImg from '../styled/Background';
import Typo from '../styled/headings/Title';
import FormWrapper from '../styled/forms/formWrapper';
import Form from '../styled/forms/Forms';
import {Wrapper}from '../styled/Wrappers/Wrapper'
import InputWrapper from '../styled/forms/InputWrapper';
import InputGroup from '../styled/forms/InputGroup';
import Input from '../styled/forms/Input';
import Button from '../styled/Elements/Button';
import {FiUser, FiLock} from 'react-icons/fi';


class SignIn extends Component {

    state = {
        email: '',
        password: '',
        loader:false
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
        const {authError, auth} = this.props;

        if (auth.uid) return <Redirect to="/"/>

        return (


            <BackgroundImg columns="3fr 2fr" url={Background}>
                <GlobalStyle/>
                <FormWrapper middle>
                    <Form middle onSubmit={this.handleSubmit}>
                        <Typo size='36px'>
                            Sign in to GymLogger
                        </Typo>
                        <Wrapper width="480px" middle>
                        <InputWrapper input-group>
                            <InputGroup prepend><FiUser/></InputGroup>
                            <Input id='email' onChange={this.handleChange} grouped/>
                        </InputWrapper>
                        <InputWrapper>
                            <InputGroup prepend><FiLock/></InputGroup>
                            <Input id='password' onChange={this.handleChange} type="password"/>
                        </InputWrapper>
                        <InputWrapper>
                           <Button large block center>Login</Button>
                        </InputWrapper>
                        <div className="error">
                            {authError ? `<p>${ authError}</p>` : ''}
                        </div>
                        </Wrapper>
                    </Form>
                </FormWrapper>
                <div>
                    <p>Hello Dasun</p>
                </div>
            </BackgroundImg>
        );
    }
}

const GlobalStyle = createGlobalStyle`
  div > svg {
   height: 1.5rem;
   width: 1.5rem;
  }
`;

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
};

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
