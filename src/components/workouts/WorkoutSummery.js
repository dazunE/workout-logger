import React , { Components } from 'react';


const WorkoutSummery = ( {workout}) => {

    return(
        <div className="single-workout">
            <h2>{ workout.name }</h2>
            <p>{ workout.description }</p>
            <p>By { workout.authorFirstName}</p>
        </div>
    )
};
export default WorkoutSummery;

