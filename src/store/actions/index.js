export const CREATE_WORKOUT = 'create_workout';
export const CREATE_WORKOUT_ERROR = 'create_workout_error';

export const createWorkout = (workout) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make a call to firebase
        const firestore = getFirestore();
        firestore.collection('workouts').add({
            ...workout,
            author: {
                id: 1,
                firstName: 'Dasun',
                lastName: 'Edirisinghe',
            }
        }).then(() => {
            dispatch({
                type: CREATE_WORKOUT,
                workout: workout
            })
        }).catch((err) => {
            dispatch({
                type: CREATE_WORKOUT_ERROR,
                err
            })
        })
    }
};

