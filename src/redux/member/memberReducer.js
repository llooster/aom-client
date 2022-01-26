import { handleActions } from "redux-actions";
import {
    REQUEST_MEMBER,
    REQUEST_SUCCESS_MEMBER,
    REQUEST_FAILURE_MEMBER,
    REQUEST_MEMBER_ONE,
    UPDATE_MEMBER_NAME,
    UPDATE_MEMBER_AGE,
    UPDATE_NEWMEMBER_NAME,
    UPDATE_NEWMEMBER_AGE,
    ADD_MEMBER,
} from "./memberTypes";

const initMembersState = {
    members: [],
    one: {},
    newMember: {},
};

const memberReducer = handleActions(
    {
        [REQUEST_MEMBER]: (state, action) => ({
            ...state,
        }),
        [REQUEST_SUCCESS_MEMBER]: (state, action) => ({
            ...state,
            members: action.payload.members,
        }),
        [REQUEST_FAILURE_MEMBER]: (state, action) => ({
            ...state,
        }),
        [REQUEST_MEMBER_ONE]: (state, action) => ({
            ...state,
            one: action.payload,
        }),
        [UPDATE_MEMBER_NAME]: (state, action) => ({
            ...state,
            one: {
                ...state.one,
                name: action.payload.name,
            },
        }),
        [UPDATE_MEMBER_AGE]: (state, action) => ({
            ...state,
            one: {
                ...state.one,
                age: action.payload.age,
            },
        }),
        [UPDATE_NEWMEMBER_NAME]: (state, action) => ({
            ...state,
            newMember: {
                ...state.newMember,
                name: action.payload.name,
            },
        }),
        [UPDATE_NEWMEMBER_AGE]: (state, action) => ({
            ...state,
            newMember: {
                ...state.newMember,
                age: action.payload.age,
            },
        }),
        [ADD_MEMBER]: (state, action) => ({
            ...state,
            newMember: {},
        }),
    },
    initMembersState
);

export default memberReducer;
