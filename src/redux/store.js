import { createStore } from "redux";
import rootReducer from "./rootReducer";

// Create Redux store
const store = createStore(rootReducer);

export default store;
