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
    REQUEST_UPDATE_LESSON,
    REQUEST_UPDATE_LESSON_SUCCESS,
    SHOW_ALERT,
    DISABLE_ALERT,
} from "./lessonTypes";
// import _ from "lodash";

const initialOne = {
    name: "",
    day: "",
    startTime: "",
    endTime: "",
    members: [],
    nonMembers: [],
    addMemberIds: [],
    deleteMemberIds: [],
};

const initialAlert = {
    isShow: false,
    message: "",
    type: "success",
};

const initLessonsState = {
    loading: false,
    one: initialOne,
    alert: initialAlert,
    lessons: [],
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
            alert: {
                isShow: true,
                message: "작업이 완료되지 못했습니다.",
                type: "warning",
            },
        }),
        [REQUEST_SUCCESS_LESSONS]: (state, action) => ({
            ...state,
            loading: false,
            message: "SUCCESS",
            lessons: action.payload.lessons,
        }),
        [REQUEST_SUCCESS_LESSON_ONE]: (state, action) => ({
            ...state,
            loading: false,
            message: "SUCCESS",
            one: {
                ...state.one,
                name: action.payload.name,
                day: action.payload.day,
                members: action.payload.members,
                // startTime: action.payload.startTime,
                // endTime: action.payload.endTime
            },
        }),
        [REQUEST_SUCCESS_POST_LESSON]: (state, action) => ({
            ...state,
            lessons: [
                ...state.lessons,
                {
                    id: action.payload.id,
                    ...state.one,
                },
            ],
            one: initialOne,
        }),
        [INIT_FORM]: (state, action) => ({
            ...state,
            one: initialOne,
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
            memberIds = removeIfNotPush(memberIds, id);
            return {
                ...state,
                one: {
                    ...state.one,
                    addMemberIds: memberIds,
                },
            };
        },
        [REQUEST_NON_MEMBER]: (state, action) => ({
            ...state,
            loading: true,
        }),
        [REQUEST_NON_MEMBER_SUCCESS]: (state, action) => ({
            ...state,
            loading: false,
            one: {
                ...state.one,
                nonMembers: action.payload.members,
            },
        }),
        [DELETE_MEMBER_FROM_LESSON]: (state, action) => {
            let id = action.payload;
            let memberIds = [...state.one.deleteMemberIds];
            memberIds = removeIfNotPush(memberIds, id);
            return {
                ...state,
                one: {
                    ...state.one,
                    deleteMemberIds: memberIds,
                },
            };
        },
        [REQUEST_UPDATE_LESSON]: (state, action) => ({
            ...state,
            loading: true,
        }),
        [REQUEST_UPDATE_LESSON_SUCCESS]: (state, action) => {
            let addMemberIds = state.one.addMemberIds;
            let delMemberIds = state.one.deleteMemberIds;
            let lsnMembers = state.one.members;
            let nonMembers = state.one.nonMembers;
            lsnMembers = pushElementWithIds(
                lsnMembers,
                nonMembers,
                addMemberIds
            );
            nonMembers = pushElementWithIds(
                nonMembers,
                lsnMembers,
                delMemberIds
            );
            lsnMembers = removeElementsWithIds(lsnMembers, delMemberIds);
            nonMembers = removeElementsWithIds(nonMembers, addMemberIds);
            return {
                ...state,
                loading: false,
                alert: {
                    isShow: true,
                    message: "업데이트를 성공했습니다.",
                    type: "success",
                },
                one: {
                    ...state.one,
                    addMemberIds: [],
                    deleteMemberIds: [],
                    members: lsnMembers,
                    nonMembers: nonMembers,
                },
            };
        },
        [SHOW_ALERT]: (state, action) => ({
            ...state,
        }),
        [DISABLE_ALERT]: (state, action) => ({
            ...state,
            alert: {
                isShow: false,
                message: "",
            },
        }),
    },
    initLessonsState
);

const removeIfNotPush = (list, element) => {
    let index = list.indexOf(element);
    index > -1 ? list.splice(index, 1) : list.push(element);
    return list;
};

const removeElementsWithIds = (lsnMembers, delIds) => {
    return lsnMembers.filter((member) => !delIds.includes(member.id));
};

const pushElementWithIds = (lsnMembers, nonMembers, addMemberIds) => {
    let list = nonMembers.filter((member) => addMemberIds.includes(member.id));
    return [...lsnMembers, ...list];
};

export default lessonsReducer;
