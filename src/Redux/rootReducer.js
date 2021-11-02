import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import joinReducer from "./reducers/joinReducer";

export default combineReducers({
    login: loginReducer,
    join: joinReducer,
});
