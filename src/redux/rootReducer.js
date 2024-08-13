import { combineReducers } from "redux";
import authReducer from "../Auth/redux/reducers/auth.reducer";

const rootReducer = combineReducers({ authReducer });

export default rootReducer;
