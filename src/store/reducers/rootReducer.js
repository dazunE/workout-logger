import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

import authReducer from './auth';
import workoutReducer from './workout'

const rootReducer = combineReducers({
    auth: authReducer,
    workout: workoutReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;
