import { handleActions, createAction } from "redux-actions";

const SELECT_LESSONS = "SELECT_LESSONS";
const REMOVE_LESSONS = "REMOVE_LESSONS";
const NEW_NAME = "NEW_NAME";
const NEW_DATE = "NEW_DATE";
const NEW_TIME = "NEW_TIME";
const NEW_ADDRESS = "NEW_ADDRESS";
const ADD_LESSON = "ADD_LESSON";
const CANCEL_MODAL = "CANCEL_MODAL";

export const selectLessons = createAction(SELECT_LESSONS);
export const removeLessons = createAction(REMOVE_LESSONS);
export const newName = createAction(NEW_NAME);
export const newDate = createAction(NEW_DATE);
export const newTime = createAction(NEW_TIME);
export const newAddress = createAction(NEW_ADDRESS);
export const addLesson = createAction(ADD_LESSON);
export const cancelModal = createAction(CANCEL_MODAL);

const initLessonsState = {
    originLessons: [
        {
            key: 1,
            name: "soccer",
            date: "화요일",
            time: 32,
            address: "체육관1",
            members: [{ id: 1, lessons: ["soccer"], name: "Jon", age: 35 }],
        },
        {
            key: 2,
            name: "swimming",
            date: "수요일",
            time: 42,
            address: "체육관2",
            members: [
                { id: 2, lessons: ["swim"], name: "Cersei", age: 42 },
                { id: 3, lessons: [""], name: "Jaime", age: 45 },
            ],
        },
        {
            key: 3,
            name: "baseball",
            date: "목요일",
            time: 32,
            address: "강의실1",
            members: [
                { id: 4, lessons: [""], name: "Arya", age: 16 },
                { id: 5, lessons: [""], name: "Daenerys", age: 80 },
                { id: 6, lessons: [""], name: "null", age: 150 },
            ],
        },
        {
            key: 4,
            name: "Jiu-Jitsu",
            date: "금요일",
            time: 99,
            address: "강의실2",
            members: [
                { id: 7, lessons: [""], name: "Ferrara", age: 44 },
                { id: 8, lessons: [""], name: "Rossini", age: 36 },
                { id: 9, lessons: [""], name: "Harvey", age: 65 },
                { id: 10, lessons: [""], name: "Harvey1", age: 6 },
            ],
        },
    ],
    selected: [],
    newLesson: {},
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
    },
    initLessonsState
);

export default lessonsReducer;
