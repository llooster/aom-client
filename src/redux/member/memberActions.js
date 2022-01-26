import { createAction } from "redux-actions";
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

export const requestMember = createAction(REQUEST_MEMBER);
export const requestSuccessMember = createAction(REQUEST_SUCCESS_MEMBER);
export const requestFailureMember = createAction(REQUEST_FAILURE_MEMBER);
export const requestMemberOne = createAction(REQUEST_MEMBER_ONE);

export const updateMemberName = createAction(UPDATE_MEMBER_NAME);
export const updateMemberAge = createAction(UPDATE_MEMBER_AGE);

export const updateNewMemberName = createAction(UPDATE_NEWMEMBER_NAME);
export const updateNewMemberAge = createAction(UPDATE_NEWMEMBER_AGE);

export const addMember = createAction(ADD_MEMBER);
