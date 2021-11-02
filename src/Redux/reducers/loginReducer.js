import { handleActions, createAction } from "redux-actions";

const UPDATE_LOGINID = "UPDATE_LOGINID";
const UPDATE_LOGINPASSWORD = "UPDATE_LOGINPASSWORD";

export const updateLoginId = createAction(UPDATE_LOGINID);
export const updateLoginPassword = createAction(UPDATE_LOGINPASSWORD);

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
