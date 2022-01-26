import { createAction } from "redux-actions";
import { UPDATE_LOGINID, UPDATE_LOGINPASSWORD } from "./loginTypes";

export const updateLoginId = createAction(UPDATE_LOGINID);
export const updateLoginPassword = createAction(UPDATE_LOGINPASSWORD);
