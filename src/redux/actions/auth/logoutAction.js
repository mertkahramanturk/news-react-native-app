
function success( data) {
    return {
      type: `LOGOUT_SUCCESS`,
      data,
    };
  }
  
  
  export const logoutAction = () => async (dispatch) => {
    try {
      dispatch(success());
     
    } catch (error) {
      console.error(error);
    }
   
  }
  
  