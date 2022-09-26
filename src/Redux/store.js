import { combineReducers } from "redux";
import dataReducer from "./reducers";

export default combineReducers({
    resume: dataReducer,
  });