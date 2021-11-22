import { createAction } from "redux-actions";
import {
    REQUEST_MEMBER,
    REQUEST_SUCCESS_MEMBER,
    REQUEST_FAILURE_MEMBER,
} from "./memberTypes";

export const requestMember = createAction(REQUEST_MEMBER);
export const requestSuccessMember = createAction(REQUEST_SUCCESS_MEMBER);
export const requestFailureMember = createAction(REQUEST_FAILURE_MEMBER);
