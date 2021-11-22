import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import joinReducer from "./reducers/joinReducer";
import membersReducer from "./reducers/membersReducer";
import paymentReducer from "./reducers/paymentReducer";

import lessonReducer from "./lesson/lessonReducer";
import attendanceReducer from "./attendance/attendanceReducer";

export default combineReducers({
    login: loginReducer,
    join: joinReducer,
    members: membersReducer,
    lessons: lessonReducer,
    attendance: attendanceReducer,
    payment: paymentReducer,
});
