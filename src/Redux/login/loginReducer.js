import { handleActions } from "redux-actions";
import { UPDATE_LOGINID, UPDATE_LOGINPASSWORD } from "./loginTypes";

const initLoginState = {
    id: undefined,
    password: undefined,
};

const loginReducer = handleActions(
    {
        [UPDATE_LOGINID]: (state, action) => ({
            ...state,
            id: action.payload.id,
        }),
        [UPDATE_LOGINPASSWORD]: (state, action) => ({
            ...state,
            password: action.payload.password,
        }),
    },
    initLoginState
);

export default loginReducer;
