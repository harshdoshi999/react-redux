import { combineReducers } from "redux";
import authReducer from "./authReducer";

// Combine reducers (we just have one here)
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
