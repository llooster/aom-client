import { handleActions, createAction } from "redux-actions";
import moment from "moment";

const NEW_NAME = "NEW_NAME";
const NEW_DATE = "NEW_DATE";
const NEW_TIME = "NEW_TIME";
const ADD_LESSON = "ADD_LESSON";
const CANCEL_MODAL = "CANCEL_MODAL";
const NEW_MEMBER = "NEW_MEMBER";

export const newName = createAction(NEW_NAME);
export const newDate = createAction(NEW_DATE);
export const newTime = createAction(NEW_TIME);
export const addLesson = createAction(ADD_LESSON);
export const cancelModal = createAction(CANCEL_MODAL);
export const newMember = createAction(NEW_MEMBER);

const initLessonsState = {
    lessons: [
        {
            id: 1,
            name: "First Lesson",
            day: "MONDAY",
            time: null,
            startTime: "",
            endTime: ""
        }
    ],
    selected: {
        id: 1,
        name: "First Lesson",
        day: "MONDAY",
        startTime: "",
        endTime: ""
    },
    newLesson: {
        name: "",
        day: "",
        startTime: "",
        endTime: ""
    },
    newMember: {},
};

const lessonsReducer = handleActions(
    {
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
                endTime: action.payload.endTime
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
