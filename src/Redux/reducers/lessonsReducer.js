import { handleActions, createAction } from "redux-actions";

const SELECT_LESSONS = "SELECT_LESSONS";
const REMOVE_LESSONS = "REMOVE_LESSONS";
const NEW_NAME = "NEW_NAME";
const NEW_TIME = "NEW_TIME";
const NEW_ADDRESS = "NEW_ADDRESS";
const ADD_LESSON = "ADD_LESSON";

export const selectLessons = createAction(SELECT_LESSONS);
export const removeLessons = createAction(REMOVE_LESSONS);
export const newName = createAction(NEW_NAME);
export const newTime = createAction(NEW_TIME);
export const newAddress = createAction(NEW_ADDRESS);
export const addLesson = createAction(ADD_LESSON);

const initLessonsState = {
    originLessons: [
        {
            key: "1",
            name: "soccer",
            time: 32,
            address: "체육관1",
        },
        {
            key: "2",
            name: "swimming",
            time: 42,
            address: "체육관2",
        },
        {
            key: "3",
            name: "baseball",
            time: 32,
            address: "강의실1",
        },
        {
            key: "4",
            name: "Jiu-Jitsu",
            time: 99,
            address: "강의실2",
        },
    ],
    selected: [],
    newLesson: {
        // name: "",
        // time: "",
        // address: "",
    },
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
            originLessons: [
                ...state.originLessons,
                action.payload.newLesson && action.payload.newLesson,
            ],
            newLesson: {
                name: "",
                time: "",
                address: "",
            },
        }),
    },
    initLessonsState
);

export default lessonsReducer;
