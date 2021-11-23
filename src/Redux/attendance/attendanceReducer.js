import { handleActions } from "redux-actions";
import { 
    UPDATE_DATE,
    UPDATE_ATT_STATUS,  
    SELECT_LESSON,
    REQUEST_DAY_LESSON,
    REQUEST_SUCCESS_DAY_LESSON,
    REQUEST_FAILURE_DAY_LESSON
} from "./attendanceType";
import moment from "moment";

const initState = {
    loading: false,
    message: "",
    date: moment(),
    lessons: [],
    selected: null,
    attendance: {
        date: "2021-11-15",
        year: 2021,
        month: 11,
        members: [
            {
                id: 1,
                name: "Lee",
                attendances: [
                    {
                        id: 1,
                        date: "2021-11-01",
                        state: "UNDEFINED",
                    },
                    {
                        id: 2,
                        date: "2021-11-08",
                        state: "Att",
                    },
                    {
                        id: 3,
                        date: "2021-11-15",
                        state: "UNDEFINED",
                    },
                    {
                        id: 4,
                        date: "2021-11-22",
                        state: "UNDEFINED",
                    },
                    {
                        id: 5,
                        date: "2021-11-29",
                        state: "UNDEFINED",
                    },
                ],
            },
            {
                id: 2,
                name: "Hangyeol",
                attendances: [
                    {
                        id: 6,
                        date: "2021-11-01",
                        state: "UNDEFINED",
                    },
                    {
                        id: 7,
                        date: "2021-11-08",
                        state: "UNDEFINED",
                    },
                    {
                        id: 8,
                        date: "2021-11-15",
                        state: "UNDEFINED",
                    },
                    {
                        id: 9,
                        date: "2021-11-22",
                        state: "UNDEFINED",
                    },
                    {
                        id: 10,
                        date: "2021-11-29",
                        state: "UNDEFINED",
                    },
                ],
            },
        ],
    },
    selected: [],
};

const attendanceReducer = handleActions(
    {
        [REQUEST_DAY_LESSON]: (state, action) => ({
            ...state,
            loading: true,
            message: "REQUEST"
        }),
        [REQUEST_SUCCESS_DAY_LESSON]: (state, action) => ({
            ...state,
            loading: false,
            message: "SUCCESS",
            lessons: action.payload.lessons
        }),
        [REQUEST_FAILURE_DAY_LESSON]: (state, action) => ({
            ...state,
            loading: false,
            message: "FAILURE",
            lessons: []
        }),
        [SELECT_LESSON]: (state, action) => ({
            ...state,
            selected: Number(action.payload.id)
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
            selected: null
        })
    },
    initState
);

export default attendanceReducer;
