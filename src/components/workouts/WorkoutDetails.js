import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux'

const WorkoutDetails = ( props ) => {

    const id = props.match.params.id;
    const { workout } = props;

    if( workout ){
        return(
            <div>
                <p>Name : { workout.name }</p>
                <p>{ workout.description }</p>
            </div>
        )
    }else{
        return(
            <div>
                <p>Loading...</p>
            </div>
        )
    }
};

const mapStateToProps = ( state , ownProps  ) => {

    const id = ownProps.match.params.id;
    const workouts = state.firestore.data.workouts;
    const workout = workouts ? workouts[id] : null ;
    return {
        workout: workout
    }
};

export default compose(
    connect( mapStateToProps ),
    firestoreConnect([{
        collection:'workouts'
    }])
)(WorkoutDetails);
