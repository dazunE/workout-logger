import { LOGIN_ERR, LOGIN_SUCCESS , SIGNOUT_SUCCESS } from '../actions/index';

const authReducer = ( state = { } , action ) => {
   switch (action.type ) {
       case LOGIN_ERR :
           console.log('login faild');
          return {
              ...state,
              authError:'Login Failed'
          }
       case LOGIN_SUCCESS:
        console.log('login success');
        return {
            ...state,
            authError: null
        }
       case SIGNOUT_SUCCESS:
          console.log('signout success');
          return state;
       default:
          return state;
   }
};

export default authReducer;
