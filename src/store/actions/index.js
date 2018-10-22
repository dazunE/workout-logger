export const CREATE_WORKOUT = 'create_workout';
export const CREATE_WORKOUT_ERROR = 'create_workout_error';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_ERR = 'login_error';
export const SIGNOUT_SUCCESS = 'signout_success';


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


export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: LOGIN_SUCCESS})
        }).catch((err) => {
            dispatch({type: LOGIN_ERR, err})
        })
    }
};


export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: SIGNOUT_SUCCESS })
        });
    }
}
