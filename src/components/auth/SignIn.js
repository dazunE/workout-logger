import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions';

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
        const { authError } = this.props ;

        return (
            <div className="sign-in_wrapper container">
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign In</h5>
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
        authError: state.auth.authError
    }
}

export default connect(null, mapDispatchToProps)(SignIn);
