import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import joinReducer from "./joinReducer";

export default combineReducers({
    login: loginReducer,
    join: joinReducer,
});
