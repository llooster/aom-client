import { handleActions } from "redux-actions";
import {
    UPDATE_ATT_STATUS,
    UPDATE_DATE,
    SELECT_LESSON,
    REQUEST_DAY_LESSON,
    REQUEST_SUCCESS_DAY_LESSON,
    REQUEST_FAILURE,
    REQUEST_LESSON_ATTENDANCE_SUCCESS,
    SUCCESS_UPDATE_NEW_ATTENDANCE,
} from "./attendanceType";
import moment from "moment";

let today = moment();

const initState = {
    loading: false,
    message: "",
    date: today,
    strDate: moment(today).format("YYYY-MM-DD"),
    lessons: [],
    selected: null,
    attendance: {},
};

const attendanceReducer = handleActions(
    {
        [REQUEST_SUCCESS_DAY_LESSON]: (state, action) => ({
            ...state,
            loading: false,
            message: "SUCCESS",
            lessons: action.payload.lessons,
        }),

        [SELECT_LESSON]: (state, action) => ({
            ...state,
            selected: Number(action.payload.id),
        }),
        [UPDATE_ATT_STATUS]: (state, action) => ({
            ...state,
            attendance: {
                ...state.attendance,
                members: action.payload.update,
            },
        }),
        [UPDATE_DATE]: (state, action) => ({
            ...state,
            date: action.payload,
            strDate: moment(action.payload).format("YYYY-MM-DD"),
            selected: null,
        }),
        [REQUEST_LESSON_ATTENDANCE_SUCCESS]: (state, action) => ({
            ...state,
            attendance: action.payload,
        }),
        [REQUEST_DAY_LESSON]: (state, action) => ({
            ...state,
            loading: true,
            message: "REQUEST",
        }),
        [REQUEST_FAILURE]: (state, action) => ({
            ...state,
            loading: false,
            message: "FAILURE",
            lessons: [],
        }),
        [SUCCESS_UPDATE_NEW_ATTENDANCE]: (state, action) => ({
            ...state,
        }),
    },
    initState
);

export default attendanceReducer;
