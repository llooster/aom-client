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
    originMembers: [
        { id: 1, firstName: "Jon", age: 35 },
        { id: 2, firstName: "Cersei", age: 42 },
        { id: 3, firstName: "Jaime", age: 45 },
        { id: 4, firstName: "Arya", age: 16 },
        { id: 5, firstName: "Daenerys", age: 80 },
        { id: 6, firstName: "null", age: 150 },
        { id: 7, firstName: "Ferrara", age: 44 },
        { id: 8, firstName: "Rossini", age: 36 },
        { id: 9, firstName: "Harvey", age: 65 },
        { id: 10, firstName: "Harvey1", age: 6 },
        { id: 11, firstName: "Harvey2", age: 1 },
        { id: 12, firstName: "Harvey3", age: 2 },
        { id: 13, firstName: "Harvey4", age: 3 },
        { id: 14, firstName: "Harvey5", age: 5 },
        { id: 15, firstName: "Harvey6", age: 7 },
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
                firstName: action.payload.firstName,
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
