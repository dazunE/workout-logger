import React , { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {  firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications';
import WorkoutList from '../workouts/WorkoutList';



class Dashboard extends Component{
    render(){
       const { workouts , auth } = this.props;

       if( !auth.uid ){
           return <Redirect to="/signin"/>
       }

        return(
            <div>
               <WorkoutList  workouts={ workouts }/>
                <Notifications/>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {

    return{
        workouts : state.firestore.ordered.workouts,
        auth: state.firebase.auth
    }
};

export default compose(
    connect( mapStateToProps ),
    firestoreConnect([{
        collection:'workouts'
    }])
)(Dashboard);
