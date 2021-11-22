import { handleActions } from "redux-actions";
import { 
    INIT_FORM,
    UPDATE_LESSON_NAME,
    UPDATE_LESSON_DAY,
    UPDATE_LESSON_TIME,
    REGISTER_LESSON,
    ADD_MEMBER_TO_LESSON,
    REQUEST_LESSON,  
    REQUEST_FAILURE_LESSON, 
    REQUEST_SUCCESS_LESSONS,
    REQUEST_SUCCESS_LESSON_ONE,
    REQUEST_SUCCESS_POST_LESSON
} from "./lessonTypes";

const initialOne = {
    name: "",
    day: "",
    startTime: "",
    endTime: "",
}

const initLessonsState = {
    loading: false,
    message: "",
    lessons: [],
    one: initialOne,
    newMember: {},
};

const lessonsReducer = handleActions(
    {
        [REQUEST_LESSON]: (state, action) => ({
            ...state,
            loading: true,
        }),
        [REQUEST_FAILURE_LESSON]: (state, action) => ({
            ...state,
            loading: false,
            message: "FAILURE"
        }),
        [REQUEST_SUCCESS_LESSONS]: (state, action) => ({
            ...state,
            laoding: false,
            message: "SUCCESS",
            lessons: action.payload.lessons
        }),
        [REQUEST_SUCCESS_LESSON_ONE]: (state, action) => ({
            ...state,
            loading: false,
            message: "SUCCESS",
            one: {
                ...state.one,
                name: action.payload.name,
                day: action.payload.day
                // startTime: action.payload.startTime,
                // endTime: action.payload.endTime
            }
        }),
        [REQUEST_SUCCESS_POST_LESSON]: (state, action) => ({
            ...state,
            lessons: [...state.lessons, {
                id: action.payload.id,
                ...state.one
            }],
            one: initialOne
        }),
        [INIT_FORM]: (state, action) => ({
            ...state,
            one: initialOne
        }),
        [UPDATE_LESSON_NAME]: (state, action) => ({
            ...state,
            one: {
                ...state.one,
                name: action.payload.name,
            },
        }),
        [UPDATE_LESSON_DAY]: (state, action) => ({
            ...state,
            one: {
                ...state.one,
                day: action.payload.day,
            },
        }),
        [UPDATE_LESSON_TIME]: (state, action) => ({
            ...state,
            one: {
                ...state.one,
                startTime: action.payload.startTime,
                endTime: action.payload.endTime,
            },
        }),
        [REGISTER_LESSON]: (state, action) => ({
            ...state,
            lessons: [...state.lessons, action.payload.one],
            one: {},
        }),
        [ADD_MEMBER_TO_LESSON]: (state, action) => ({}),
    },
    initLessonsState
);

export default lessonsReducer;
