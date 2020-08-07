const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // change code below this line
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true
      };
    default:
      return defaultState;
  }
  // change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
