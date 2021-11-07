import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import joinReducer from "./reducers/joinReducer";
import membersReducer from "./reducers/membersReducer";
import lessonsReducer from "./reducers/lessonsReducer.js";
import attendanceReducer from "./reducers/attendanceReducer";

export default combineReducers({
    login: loginReducer,
    join: joinReducer,
    members: membersReducer,
    lessons: lessonsReducer,
    attendance: attendanceReducer,
});
