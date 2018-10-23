export const CREATE_WORKOUT = 'create_workout';
export const CREATE_WORKOUT_ERROR = 'create_workout_error';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_ERR = 'login_error';
export const SIGNOUT_SUCCESS = 'signout_success';
export const SIGNUP_SUCESS = 'signup_success';
export const SIGNUP_ERROR = 'signup_error';


export const createWorkout = (workout) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make a call to firebase
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('workouts').add({
            ...workout,
            author: {
                id: authorId,
                firstName: profile.firstName,
                lastName: profile.lastName
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
            dispatch({type: SIGNOUT_SUCCESS})
        });
    }
}


export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            });
        }).then(() => {
            dispatch({ type: SIGNUP_SUCESS });
        }).catch((err) => {
            dispatch({ type: SIGNUP_ERROR, err});
        });
    }
};
