import React , { Components } from 'react';
import { Link } from 'react-router-dom';

import WorkoutSummery from './WorkoutSummery';

const WorkoutList = ({ workouts }) => {
    return(
        <div className="Workouts col-md-9">
            { workouts && workouts.map( workout => {
                return(
                    <Link to={`/workout/${workout.id}`} key={workout.id}>
                      <WorkoutSummery workout={workout} key={workout.id}/>
                    </Link>
                )
            })}
        </div>
    )
};
export default WorkoutList;
