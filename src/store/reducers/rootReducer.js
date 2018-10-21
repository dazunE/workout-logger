import  { combineReducers } from 'redux';
import  { firestoreReducer } from 'redux-firestore';

import authReducer from './auth';
import workoutReducer from './workout'

const rootReducer = combineReducers({
    auth: authReducer,
    workout:workoutReducer,
    firestore: firestoreReducer
});

export default rootReducer;