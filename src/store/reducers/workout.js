import {CREATE_WORKOUT, CREATE_WORKOUT_ERROR} from '../actions/index';


const initState = {
    workouts: [
        {id: 1, name: 'Chest Workout', description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.'},
        {
            id: 2,
            name: 'Abs Workout',
            description: 'Ad dolorem exercitationem expedita hic magnam minima nulla odio. Ad ea eaque fugiat '
        },
        {
            id: 3,
            name: 'Arms Workout',
            description: 'illum nesciunt, nisi quia saepe veritatis! Accusamus, dicta, error.'
        }
    ]
}

const workoutReducer = (state = initState, action) => {

    switch (action.type) {
        case CREATE_WORKOUT:
            console.table(action.workout)
            return state;

        case CREATE_WORKOUT_ERROR:
            console.log('create workout error' , action.err )
            return state;

        default:
            return state;
    }

};

export default workoutReducer;
