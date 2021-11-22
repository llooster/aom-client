import { handleActions } from "redux-actions";
import {
    REQUEST_MEMBER,
    REQUEST_SUCCESS_MEMBER,
    REQUEST_FAILURE_MEMBER,
} from "./memberTypes";

const initMembersState = {
    members: [],
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
    },
    initMembersState
);

export default memberReducer;
