import React , { Components } from 'react';


const WorkoutSummery = ( {workout}) => {

    return(
        <div className="single-workout">
            <h2>{ workout.name }</h2>
            <p>{ workout.description }</p>
        </div>
    )
};
export default WorkoutSummery;

