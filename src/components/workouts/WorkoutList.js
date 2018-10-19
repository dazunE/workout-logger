import React , { Components } from 'react';
import WorkoutSummery from './WorkoutSummery';

const WorkoutList = () => {
    return(
        <div className="Workouts">
            <WorkoutSummery/>
            <WorkoutSummery/>
            <WorkoutSummery/>
            <WorkoutSummery/>
        </div>
    )
};
export default WorkoutList;
