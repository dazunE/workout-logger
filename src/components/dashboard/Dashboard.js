import React , { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {  firestoreConnect } from 'react-redux-firebase';
import Notifications from './Notifications';
import WorkoutList from '../workouts/WorkoutList';



class Dashboard extends Component{
    render(){
       const { workouts } = this.props;
        return(
            <div>
               <WorkoutList  workouts={ workouts }/>
                <Notifications/>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    console.log(state);
    return{
        workouts : state.firestore.ordered.workouts
    }
};

export default compose(
    connect( mapStateToProps ),
    firestoreConnect([{
        collection:'workouts'
    }])
)(Dashboard);
