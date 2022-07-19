import { combineReducers, createStore } from "redux";
import { authReducer } from "./authReucer";
import { listReducer } from "./listReducer";
import { movieReducer } from "./movieReducer";
import { userReducer } from "./userReducer";
const rootReducer = combineReducers({
  authReducer,
  userReducer,
  movieReducer,
  listReducer,
});
export const store = createStore(rootReducer);
