import { handleActions, createAction } from "redux-actions";

const SELECT_LESSONS = "SELECT_LESSONS";
const REMOVE_LESSONS = "REMOVE_LESSONS";
const NEW_NAME = "NEW_NAME";
const NEW_DATE = "NEW_DATE";
const NEW_TIME = "NEW_TIME";
const NEW_ADDRESS = "NEW_ADDRESS";
const ADD_LESSON = "ADD_LESSON";
const CANCEL_MODAL = "CANCEL_MODAL";
const NEW_MEMBER = "NEW_MEMBER";

export const selectLessons = createAction(SELECT_LESSONS);
export const removeLessons = createAction(REMOVE_LESSONS);
export const newName = createAction(NEW_NAME);
export const newDate = createAction(NEW_DATE);
export const newTime = createAction(NEW_TIME);
export const newAddress = createAction(NEW_ADDRESS);
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
            startTime: "12:00",
            endTime: "13:00",
        },
        {
            id: 2,
            name: "Second Lesson",
            day: "TUESDAY",
            time: null,
            startTime: "13:00",
            endTime: "14:00",
        },
    ],
    selected: [],
    newLesson: {},
    newMember: {},
};

const lessonsReducer = handleActions(
    {
        [SELECT_LESSONS]: (state, action) => ({
            ...state,
            selected: action.payload.selectedLessons,
        }),
        [REMOVE_LESSONS]: (state, action) => ({
            ...state,
            originLessons: action.payload.updatedLessons,

            selected: [],
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
                time: action.payload.time,
            },
        }),
        [NEW_ADDRESS]: (state, action) => ({
            ...state,
            newLesson: {
                ...state.newLesson,
                address: action.payload.address,
            },
        }),
        [ADD_LESSON]: (state, action) => ({
            ...state,
            originLessons: [...state.originLessons, action.payload.newLesson],
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
