import { handleActions } from "redux-actions";
import { 
    UPDATE_LESSON_NAME,
    UPDATE_LESSON_DATE,
    UPDATE_LESSON_TIME,
    REGISTER_LESSON,
    ADD_MEMBER_TO_LESSON,
    REQUEST_LESSON,  
    REQUEST_SUCCESS_LESSON,
    REQUEST_FAILURE_LESSON 
} from "./lessonTypes";

const initLessonsState = {
    loading: false,
    message: "",
    lessons: [],
    selected: {
    },
    newLesson: {
        name: "",
        day: "",
        startTime: "",
        endTime: "",
    },
    newMember: {},
};

const lessonsReducer = handleActions(
    {
        [REQUEST_LESSON]: (state, action) => ({
            loading: true,
            ...state,
        }),
        [REQUEST_SUCCESS_LESSON]: (state, action) => ({
            laoding: false,
            message: "SUCCESS",
            lessons: action.payload.lessons
        }),
        [REQUEST_FAILURE_LESSON]: (state, action) => ({
            loading: false,
            message: "FAILURE"
        }),
        [UPDATE_LESSON_NAME]: (state, action) => ({
            ...state,
            newLesson: {
                ...state.newLesson,
                name: action.payload.name,
            },
        }),
        [UPDATE_LESSON_DATE]: (state, action) => ({
            ...state,
            newLesson: {
                ...state.newLesson,
                date: action.payload.date,
            },
        }),
        [UPDATE_LESSON_TIME]: (state, action) => ({
            ...state,
            newLesson: {
                ...state.newLesson,
                startTime: action.payload.startTime,
                endTime: action.payload.endTime,
            },
        }),
        [REGISTER_LESSON]: (state, action) => ({
            ...state,
            lessons: [...state.lessons, action.payload.newLesson],
            newLesson: {},
        }),
        [ADD_MEMBER_TO_LESSON]: (state, action) => ({}),
    },
    initLessonsState
);

export default lessonsReducer;
