import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import joinReducer from "./reducers/joinReducer";

import memberReducer from "./member/memberReducer";
import lessonReducer from "./lesson/lessonReducer";
import paymentReducer from "./payment/paymentReducer";
import attendanceReducer from "./attendance/attendanceReducer";

export default combineReducers({
    login: loginReducer,
    join: joinReducer,
    members: memberReducer,
    lessons: lessonReducer,
    attendance: attendanceReducer,
    payment: paymentReducer,
});
