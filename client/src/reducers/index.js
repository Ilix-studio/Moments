import { combineReducers } from "redux";
//i have to used multiple reducer, so combine reducer is used to combime them.
import alert from "./alert";

export default combineReducers({ alert });
