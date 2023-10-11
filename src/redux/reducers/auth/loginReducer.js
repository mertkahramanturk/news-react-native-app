const initialState = {
    success: false,
    error: false,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_REQUEST': {
        return {...initialState, loading: true, success: false};
      }
      case 'LOGIN_SUCCESS': {
        return {...state, success: true, loading: false};
      }
      case 'LOGIN_FAILURE': {
        return {...state, error: true, loading: false};
      }
      case 'LOGOUT' : {
        return Object.assign({}, state);
      }
      default:
        return state;
    }
  }
  