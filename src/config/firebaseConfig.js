import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDda4eWKQZGXqKwaFzeb4OZcj0bKwM15UM",
    authDomain: "cd-workout-logger.firebaseapp.com",
    databaseURL: "https://cd-workout-logger.firebaseio.com",
    projectId: "cd-workout-logger",
    storageBucket: "cd-workout-logger.appspot.com",
    messagingSenderId: "414332663746"
};
firebase.initializeApp(config);

firebase.firestore().settings({
    timestampsInSnapshots:true
});

export default firebase;