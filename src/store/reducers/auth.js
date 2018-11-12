import {LOGIN_ERR, LOGIN_SUCCESS, SIGNOUT_SUCCESS, SIGNUP_SUCESS, SIGNUP_ERROR} from '../actions/index';

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_ERR :
            console.log('login faild');
            return {
                ...state,
                authError: 'Login Failed'
            };
        case LOGIN_SUCCESS:
            console.log('login success');
            debugger;
            return {
                ...state,
                authError: null,
                loader:false
            };
        case SIGNOUT_SUCCESS:
            console.log('signout success');
            return state;
        case SIGNUP_SUCESS:
            console.log('signup success');
            return {
                ...state,
                authError: null
            };
        case SIGNUP_ERROR:
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
};

export default authReducer;
