import React, { Component } from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from "./components/layouts/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import WorkoutDetials from './components/workouts/WorkoutDetails';
import SignIn from './components/auth/SignIn';
import SignUp from  './components/auth/SignUp';
import CreateWorkout from './components/workouts/CreateWorkout';


class App extends Component {

  render() {
      const { auth } = this.props;

    return (
        <BrowserRouter>
            <div className="workout-logger">
                <NavBar/>
                 <Switch>
                     {  auth.uid && <Route exact path="/" component={ Dashboard }/> }
                    <Route path="/" component={ SignIn }/>
                    <Route path="/workout/:id" component={ WorkoutDetials}/>
                    <Route path="/signup" component={ SignUp }/>
                    <Route path="/create-workout" component={ CreateWorkout }/>
                 </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = ( state ) => {
    return{
        auth: state.firebase.auth
    }
}

export default connect( mapStateToProps)(App);
