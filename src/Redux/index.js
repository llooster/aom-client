import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import joinReducer from "./reducers/joinReducer";
import membersReducer from "./reducers/membersReducer";
// import getMembers from "./reducers/membersReducer";

export default combineReducers({
    login: loginReducer,
    join: joinReducer,
    members: membersReducer,
    // selectedMembers: getMembers,
});
