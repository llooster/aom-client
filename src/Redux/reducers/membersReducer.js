import { handleActions, createAction } from "redux-actions";

const GET_MEMBER = "GET_MEMBER";
const NEW_NAME = "NEW_NAME";
const NEW_AGE = "NEW_AGE";
const NEW_ID = "NEW_ID";
const ADD_MEMBER = "ADD_MEMBER";
const REMOVE_MEMBER = "REMOVE_MEMBER";
const UPDATE_MEMBERSAPI = "UPDATE_MEMBERSAPI";

export const getMember = createAction(GET_MEMBER);
export const newName = createAction(NEW_NAME);
export const newAge = createAction(NEW_AGE);
export const newId = createAction(NEW_ID);
export const addMember = createAction(ADD_MEMBER);
export const removeMember = createAction(REMOVE_MEMBER);
export const updateMembersAPI = createAction(UPDATE_MEMBERSAPI);

const initMembersState = {
    members: [
        {
            id: 1,
            name: "Hangyeol",
            age: 25,
        },
        {
            id: 2,
            name: "Jaeik",
            age: 30,
        },
    ],
    selected: [],
    newMember: {
        name: "",
        age: "",
    },
};

const membersReducer = handleActions(
    {
        [UPDATE_MEMBERSAPI]: (state, action) => ({
            ...state,
            members: action.payload.members,
        }),
        [NEW_NAME]: (state, action) => ({
            ...state,
            newMember: {
                ...state.newMember,
                name: action.payload.name,
            },
        }),
        [NEW_AGE]: (state, action) => ({
            ...state,
            newMember: {
                ...state.newMember,
                age: action.payload.age,
            },
        }),
        [NEW_ID]: (state, action) => ({
            ...state,
            newMember: {
                ...state.newMember,
                id: action.payload.id,
            },
        }),
        [ADD_MEMBER]: (state, action) => ({
            ...state,
            members: [...state.members, action.payload.newMember],
            newMember: {
                name: "",
                age: "",
            },
        }),
        [REMOVE_MEMBER]: (state, action) => ({
            ...state,
            members: action.payload.updateMembers,
        }),
        [GET_MEMBER]: (state, action) => ({
            ...state,
            selected: action.payload.selectedMembers,
        }),
    },
    initMembersState
);

export default membersReducer;
