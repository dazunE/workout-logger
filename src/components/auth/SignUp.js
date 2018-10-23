import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { signUp } from "../../store/actions";

class SignUp extends Component {

    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    };

    handleChange = (e ) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( this.state );
        this.props.signUp(this.state);
    };

    render() {

        const { auth , authError } = this.props;

        if( auth.uid ) return <Redirect to="/"/>

        return (
            <div className="sign-in_wrapper container">
                <form onSubmit={ this.handleSubmit }>
                    <h5>Sign Up</h5>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={ this.handleChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={ this.handleChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={ this.handleChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={ this.handleChange} className="form-control"/>
                    </div>
                    { authError ? <div className="alert alert-danger">{ authError }</div> : null }
                    <div className="form-group">
                        <button className="btn btn-primary">
                            SignUp
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return{
        auth: state.firebase.auth,
        authError : state.auth.authError
    }
};

const MapDispatchToProps = ( dispatch ) => {
    return{
        signUp : ( newUser ) => dispatch( signUp( newUser))
    }
};

export default connect( mapStateToProps , MapDispatchToProps  )(SignUp);
