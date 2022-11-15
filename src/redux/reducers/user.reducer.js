const initialState = {
    credentials: null
  };
  
const UserReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case "FETCH_CREDENTIAL": {
        return { ...state, credentials: payload };
      }
      case 'CLEAR_CREDENTIAL':{
        return {...state,credentials:''};
      }
      default:
        return state;
    }
  };
  
export default UserReducer;