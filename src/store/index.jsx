import { combineReducers, legacy_createStore as createStore } from "redux";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension" 

const rootReducer = combineReducers({
  users: userReducer
});

export const store = createStore(rootReducer, composeWithDevTools());