import React , { Components } from 'react';
import { Link } from 'react-router-dom';

import WorkoutSummery from './WorkoutSummery';

const WorkoutList = ({ workouts }) => {
    return(
        <div className="Workouts">
            { workouts && workouts.map( workout => {
                return(
                    <Link to={`/workout/${workout.id}`}>
                      <WorkoutSummery workout={workout} key={workout.id}/>
                    </Link>
                )
            })}
        </div>
    )
};
export default WorkoutList;
