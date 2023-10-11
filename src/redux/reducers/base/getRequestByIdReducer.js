
const initialState = {
    data: [],
    loading: false,
    success: false,
    error: false,
    filterValues: undefined,
  };
  
  export const getByIdRequest = (namespace) => (state = initialState, action) => {
    switch (action.type) {
      case `${namespace}/GET_BY_ID_REQUEST_REQUEST`: {
        return { ...initialState, loading: true };
      }
      case `${namespace}/GET_BY_ID_REQUEST_SUCCESS`: {
        return { ...state, data: action.data, success: false, loading: false };
      }
      case `${namespace}/GET_BY_ID_REQUEST_FAILURE`: {
        return { ...state, data: [], success: false, error: action.error, loading: false };
      }
      case `${namespace}/GET_BY_ID_REQUEST_RESET`: {
        return initialState;
      }
      default:
        return state;
    }
  };
  