import React from 'react';

const WorkoutDetails = ( props ) => {

    const id = props.match.params.id;

    return (
        <div>
            <p> ID : { id  } </p>
            <p>Workout Details goes here</p>
        </div>
    );
};

export default WorkoutDetails;
