import React, { Component} from 'react';
import { connect } from 'react-redux';
import { createWorkout } from "../../store/actions";

class CreateWorkout extends Component {

    state = {
        id:'',
        name:'',
        description:''
    };

    handleChange = (e ) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    };

    handleSubmit = ( e ) => {
        e.preventDefault();
        this.props.createWorkout(this.state);
    };


    render() {
        return (
            <div className="create-workout">
                <form onSubmit={ this.handleSubmit }>
                    <h5>Create Workout</h5>
                    <div className="input-filed">
                        <label htmlFor="id">Id</label>
                        <input type="text" id="id" onChange={ this.handleChange}/>
                    </div>
                    <div className="input-filed">
                        <label htmlFor="name">Workout Name</label>
                        <input type="text" id="workout" onChange={ this.handleChange}/>
                    </div>
                    <div className="input-filed">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" onChange={ this.handleChange }>

                        </textarea>
                    </div>
                    <div className="input-filed">
                        <button className="btn-signin btn">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        createWorkout : ( workout ) => dispatch( createWorkout( workout ))
    }
};

export default connect( null , mapDispatchToProps )(CreateWorkout);
