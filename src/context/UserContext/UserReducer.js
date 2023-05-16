const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        message: action.payload.message,
      };
    case "REGISTER":
      return {
        ...state,
        message: action.payload.message,
      };
      case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};

export default userReducer;

  