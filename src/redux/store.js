import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";

const initailstate = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initailstate,
  composeWithDevTools(applyMiddleware(...middleware))
);
// rootReducer
// initailstate
// middleware spec.(thunk)
export default store;
