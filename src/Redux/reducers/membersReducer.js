import { handleActions, createAction } from "redux-actions";

const GET_MEMBER = "GET_MEMBER";
const ADD_MEMBER = "ADD_MEMBER";
const REMOVE_MEMBER = "REMOVE_MEMBER";

export const getMember = createAction(GET_MEMBER);
export const addMember = createAction(ADD_MEMBER);
export const removeMember = createAction(REMOVE_MEMBER);

const initMembersState = {
    originMembers: [
        { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
        { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
        { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
        { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
        { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 80 },
        { id: 6, lastName: "Melisandre", firstName: "null", age: 150 },
        { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
        { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
        { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
        { id: 10, lastName: "Roxie1", firstName: "Harvey1", age: 6 },
        { id: 11, lastName: "Roxie2", firstName: "Harvey2", age: 1 },
        { id: 12, lastName: "Roxie3", firstName: "Harvey3", age: 2 },
        { id: 13, lastName: "Roxie4", firstName: "Harvey4", age: 3 },
        { id: 14, lastName: "Roxie5", firstName: "Harvey5", age: 5 },
        { id: 15, lastName: "Roxie6", firstName: "Harvey6", age: 7 },
    ],
    selected: [],
};

const membersReducer = handleActions(
    {
        // [UPDATE_LOGINID]: (state, action) => ({
        //     ...state,
        // }),
        [REMOVE_MEMBER]: (state, action) => ({
            ...state,
            originMembers: action.payload.updateMembers,
        }),
        [GET_MEMBER]: (state, action) => ({
            ...state,
            selected: action.payload.checkedMember,
        }),
    },
    initMembersState
);

export default membersReducer;
