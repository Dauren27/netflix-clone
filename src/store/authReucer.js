const initialState = {
  name: "",
  email: "",
  photoUrl: "",
  isAuth: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_INFO":
      return {
        ...state,
        photoUrl: action.payload._delegate.photoURL,
        email: action.payload._delegate.email,
        name: action.payload._delegate.displayName,
        isAuth: true
      };
    default:
      return state;
  }
};
