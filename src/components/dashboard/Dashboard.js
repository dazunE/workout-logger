import React , { Component } from 'react';
import Notifications from './Notifications';
import WorkoutList from '../workouts/WorkoutList';


class Dashboard extends Component{
    render(){
        return(
            <div>
               <WorkoutList/>
            </div>
        )
    }
}

export default Dashboard;
