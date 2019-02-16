const initState = {
  authError: null
};

//needs a state to run, even if it's an empty object
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state, //spreader includes any other possibilities
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    default:
      //always include default state with switch
      return state;
  }
};

export default authReducer;
