import { handleActions } from "redux-actions";
import { 
    INIT_FORM,
    UPDATE_LESSON_NAME,
    UPDATE_LESSON_DAY,
    UPDATE_LESSON_TIME,
    REGISTER_LESSON,
    ADD_MEMBER_TO_LESSON,
    DELETE_MEMBER_FROM_LESSON,
    REQUEST_LESSON,  
    REQUEST_FAILURE_LESSON, 
    REQUEST_SUCCESS_LESSONS,
    REQUEST_SUCCESS_LESSON_ONE,
    REQUEST_SUCCESS_POST_LESSON,
    REQUEST_NON_MEMBER,
    REQUEST_NON_MEMBER_SUCCESS,
} from "./lessonTypes";
import _ from "lodash";

const initialDays = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
}

const initialOne = {
    name: "",
    day: "",
    startTime: "",
    endTime: "",
    members: [],
    nonMembers: [],
    addMemberIds: [],
    deleteMemberIds: []
}

const initLessonsState = {
    loading: false,
    message: "",
    lessons: [],
    days: initialDays,
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
        [REQUEST_SUCCESS_LESSONS]: (state, action) => {
            let items = action.payload.lessons.filter((lesson) => {
                return _.isEmpty(lesson.name) === false && _.isEmpty(lesson.day) === false;
            });
            let days = initialDays;
            items.forEach((item) => {
                let day = item.day.toLowerCase();
                days[day].push(item);
            })
            return {
                ...state,
                loading: false,
                message: "SUCCESS",
                lessons: items,
                days: days
            }
        },
        [REQUEST_SUCCESS_LESSON_ONE]: (state, action) => ({
            ...state,
            loading: false,
            message: "SUCCESS",
            one: {
                ...state.one,
                name: action.payload.name,
                day: action.payload.day,
                members: action.payload.members
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
        [ADD_MEMBER_TO_LESSON]: (state, action) => {
            let id = action.payload;
            let memberIds = [...state.one.addMemberIds];
            let index = memberIds.indexOf(id);
            index > -1 ? memberIds.splice(index, 1) : memberIds.push(id);
            return {
                ...state,
                one: {
                    ...state.one,
                    addMemberIds: memberIds
                }
            }
        },
        [REQUEST_NON_MEMBER]: (state, action) => ({
            ...state,
            loading: true
        }),
        [REQUEST_NON_MEMBER_SUCCESS]: (state, action) => ({
            ...state,
            loading: false,
            one: {
                ...state.one,
                nonMembers: action.payload.members
            }
        }),
        [DELETE_MEMBER_FROM_LESSON]: (state, action) => {
            let id = action.payload;
            let memberIds = [...state.one.deleteMemberIds];
            let index = memberIds.indexOf(id);
            index > -1 ? memberIds.splice(index, 1) : memberIds.push(id);
            return {
                ...state,
                one: {
                    ...state.one,
                    deleteMemberIds: memberIds
                }
            }
        }
    },
    initLessonsState
);

export default lessonsReducer;
