import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom'
import {signUp} from "../../store/actions";

import Background from '../../assests/images/main-bg.jpg';

import BackgroundImg from '../styled/Background';
import Typo from '../styled/headings/Title';
import FormWrapper from '../styled/forms/formWrapper';
import Form from '../styled/forms/Forms';
import {Wrapper} from '../styled/Wrappers/Wrapper'
import InputWrapper from '../styled/forms/InputWrapper';
import InputGroup from '../styled/forms/InputGroup';
import Input from '../styled/forms/Input';
import Button from '../styled/Elements/Button';
import {FiLock, FiMail, FiUser , FiLayout} from "react-icons/fi";
import {createGlobalStyle} from "styled-components";

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signUp(this.state);
    };

    render() {

        const {auth, authError} = this.props;

        if (auth.uid) return <Redirect to="/"/>

        return (
            <BackgroundImg columns="2fr 3fr" url={Background}>
                <GlobalStyle/>
                <div>
                    <Link to="/signin">Login</Link>
                </div>
                <FormWrapper middle>
                    <Form middle onSubmit={this.handleSubmit}>
                        <Typo size='36px'>Sign Up</Typo>
                        <Wrapper width="480px" middle>
                            <InputWrapper input-group>
                                <InputGroup prepend><FiUser/></InputGroup>
                                <Input id='firstName' onChange={this.handleChange} grouped/>
                            </InputWrapper>
                            <InputWrapper input-group>
                                <InputGroup prepend><FiUser/></InputGroup>
                                <Input id='lastName' onChange={this.handleChange} grouped/>
                            </InputWrapper>
                            <InputWrapper input-group>
                                <InputGroup prepend><FiMail/></InputGroup>
                                <Input id='email' onChange={this.handleChange} grouped placeholder="Enter your e-mail"/>
                            </InputWrapper>
                            <InputWrapper>
                                <InputGroup prepend><FiLock/></InputGroup>
                                <Input id='password' onChange={this.handleChange} type="password"/>
                            </InputWrapper>
                            {authError ? <div className="alert alert-danger">{authError}</div> : null}
                            <InputWrapper>
                                <Button large block center>Sign up</Button>
                            </InputWrapper>
                        </Wrapper>
                    </Form>
                </FormWrapper>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
};

export default connect(mapStateToProps, MapDispatchToProps)(SignUp);
