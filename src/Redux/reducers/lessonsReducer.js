import { handleActions, createAction } from "redux-actions";

const NEW_NAME = "NEW_NAME";
const NEW_DATE = "NEW_DATE";
const NEW_TIME = "NEW_TIME";
const ADD_LESSON = "ADD_LESSON";
const CANCEL_MODAL = "CANCEL_MODAL";
const NEW_MEMBER = "NEW_MEMBER";

export const LESSON_FETCH_REQUEST = "lessons/LESSON_FETCH_REQUEST";
export const LESSON_FETCH_SUCCESS = "lessons/LESSON_FETCH_SUCCESS";
export const LESSON_FETCH_FAILURE = "lessons/LESSON_FETCH_FAILURE";

export const fetchLessonRequest = createAction(LESSON_FETCH_REQUEST);
export const fetchLessonSuccess = createAction(LESSON_FETCH_SUCCESS);
export const fetchLessonFailure = createAction(LESSON_FETCH_FAILURE);

export const newName = createAction(NEW_NAME);
export const newDate = createAction(NEW_DATE);
export const newTime = createAction(NEW_TIME);
export const addLesson = createAction(ADD_LESSON);
export const cancelModal = createAction(CANCEL_MODAL);
export const newMember = createAction(NEW_MEMBER);

const initLessonsState = {
    loading: false,
    error: "",
    lessons: [
        {
            id: 1,
            name: "First Lesson",
            day: "MONDAY",
            time: null,
            startTime: "",
            endTime: "",
        },
    ],
    selected: {
        id: 1,
        name: "First Lesson",
        day: "MONDAY",
        startTime: "",
        endTime: "",
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
        [LESSON_FETCH_REQUEST]: (state, action) => ({
            loading: true,
            ...state,
        }),
        [LESSON_FETCH_SUCCESS]: (state, action) => ({
            laoding: false,
            error: "SUCCESS",
            lessons: action.payload.data.result.lessons
        }),
        [LESSON_FETCH_FAILURE]: (state, action) => ({
            loading: false,
            error: "FAILURE"
        }),
        [NEW_NAME]: (state, action) => ({
            ...state,
            newLesson: {
                ...state.newLesson,
                name: action.payload.name,
            },
        }),
        [NEW_DATE]: (state, action) => ({
            ...state,
            newLesson: {
                ...state.newLesson,
                date: action.payload.date,
            },
        }),
        [NEW_TIME]: (state, action) => ({
            ...state,
            newLesson: {
                ...state.newLesson,
                startTime: action.payload.startTime,
                endTime: action.payload.endTime,
            },
        }),
        [ADD_LESSON]: (state, action) => ({
            ...state,
            lessons: [...state.lessons, action.payload.newLesson],
            newLesson: {},
        }),
        [CANCEL_MODAL]: (state, action) => ({
            ...state,
            newLesson: {},
        }),
        [NEW_MEMBER]: (state, action) => ({}),
    },
    initLessonsState
);

export default lessonsReducer;
