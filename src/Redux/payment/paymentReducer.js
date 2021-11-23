import { handleActions } from "redux-actions";
import {
    UPDATE_PAYMENT,
    REQUEST_SUCCESS_TODAY_LESSON,
    REQUEST_SUCCESS_TODAY_PAYMENT,
} from "./paymentType";

const initState = {
    lessons: [],
    payment: {},
    selected: [],
};

const paymentReducer = handleActions(
    {
        [REQUEST_SUCCESS_TODAY_LESSON]: (state, action) => ({
            ...state,
            lessons: action.payload.lessons,
        }),
        [REQUEST_SUCCESS_TODAY_PAYMENT]: (state, action) => ({
            ...state,
            payment: action.payload,
        }),
        [UPDATE_PAYMENT]: (state, action) => ({
            ...state,
            members: action.payload.update,
        }),
    },
    initState
);

export default paymentReducer;
