import { handleActions, createAction } from "redux-actions";

const UPDATE_ID = "UPDATE_ID";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

export const updateId = createAction(UPDATE_ID);
export const updatePassword = createAction(UPDATE_PASSWORD);

const initialState = {
    id: null,
    password: null,
};

const loginReducer = handleActions(
    {
        [UPDATE_ID]: (state, action) => ({
            ...state,
            id: action.payload.id,
        }),
        [UPDATE_PASSWORD]: (state, action) => ({
            ...state,
            password: action.payload.password,
        }),
    },
    initialState
);

export default loginReducer;
