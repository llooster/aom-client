import { handleActions, createAction } from "redux-actions";

const GET_MEMBER = "GET_MEMBER";
const NEW_NAME = "NEW_NAME";
const NEW_AGE = "NEW_AGE";
const NEW_ID = "NEW_ID";
const ADD_MEMBER = "ADD_MEMBER";
const REMOVE_MEMBER = "REMOVE_MEMBER";

export const getMember = createAction(GET_MEMBER);
export const newName = createAction(NEW_NAME);
export const newAge = createAction(NEW_AGE);
export const newId = createAction(NEW_ID);
export const addMember = createAction(ADD_MEMBER);
export const removeMember = createAction(REMOVE_MEMBER);

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
    newbie: {
        id: 0,
        firstName: "",
        age: "",
    },
};

const membersReducer = handleActions(
    {
        [NEW_NAME]: (state, action) => ({
            ...state,
            newbie: {
                ...state.newbie,
                name: action.payload.firstName,
            },
        }),
        [NEW_ID]: (state, action) => ({
            ...state,
            newbie: {
                ...state.newbie,
                id: action.payload.id,
            },
        }),
        [NEW_AGE]: (state, action) => ({
            ...state,
            newbie: {
                ...state.newbie,
                age: action.payload.age,
            },
        }),
        [ADD_MEMBER]: (state, action) => ({
            ...state,
            originMembers: [...state.originMembers, action.payload.newMember],
            newbie: {
                id: 0,
                firstName: "",
                age: "",
            },
        }),
        [REMOVE_MEMBER]: (state, action) => ({
            ...state,
            originMembers: action.payload.updateMembers,
        }),
        [GET_MEMBER]: (state, action) => ({
            ...state,
            selected: action.payload.selectedMembers,
        }),
    },
    initMembersState
);

export default membersReducer;
