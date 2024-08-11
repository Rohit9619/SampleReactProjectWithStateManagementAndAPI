const initialState = {
  loading: false,
  auth: false,
  switchPage: false,
};

const AuthHandler = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: action.payload === 1 ? true : false,
        ...state,
      };

    case "SIGNUP/SIGNIN":
      return {
        ...state,
        switchPage: !state.switchPage,
      };

    case "LOGIN/LOGOUT":
      return {
        ...state,
        auth: action.payload === 1 ? true : false,
      };

    default:
      return {
        ...state,
        auth: localStorage.getItem("Auth")
          ? JSON.parse(localStorage.getItem("Auth"))
          : false,
      };
  }
};

export default AuthHandler;
