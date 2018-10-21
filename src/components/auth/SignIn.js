import React, { Component} from 'react';

class SignIn extends Component {

    state = {
        email:'',
        password:'',
    };

    handleChange = (e ) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    handleSubmit = ( e ) => {
        e.preventDefault();
        console.log( this.state );
    };


    render() {
        return (
            <div className="sign-in_wrapper">
                <form onSubmit={ this.handleSubmit }>
                    <h5>Sign In</h5>
                    <div className="input-filed">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={ this.handleChange}/>
                    </div>
                    <div className="input-filed">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={ this.handleChange}/>
                    </div>
                    <div className="input-filed">
                        <button className="btn-signin btn">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
