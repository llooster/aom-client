import { createAction } from "redux-actions";
import {
    UPDATE_PAYMENT_STATUS,
    UPDATE_DATE,
    SELECT_LESSON,
    REQUEST_FAILURE,
    REQUEST_DAY_LESSON_PAYMENT,
    REQUEST_SUCCESS_DAY_LESSON,
    REQUEST_LESSON_PAYMENT,
    REQUEST_LESSON_PAYMENT_SUCCESS,
    UPDATE_NEW_PAYMENT,
    SUCCESS_UPDATE_NEW_PAYMENT,
} from "./paymentType";

export const updatePaymentStatus = createAction(UPDATE_PAYMENT_STATUS);
export const updateDate = createAction(UPDATE_DATE);
export const selectLesson = createAction(SELECT_LESSON);

export const fetchDayLessonRequest = createAction(REQUEST_DAY_LESSON_PAYMENT);
export const fetchDayLessonSuccess = createAction(REQUEST_SUCCESS_DAY_LESSON);
export const fetchDayLessonFailure = createAction(REQUEST_FAILURE);

export const fetchLessonPaymentRequest = createAction(REQUEST_LESSON_PAYMENT);
export const fetchLessonPaymentSuccess = createAction(
    REQUEST_LESSON_PAYMENT_SUCCESS
);
export const updateNewPayment = createAction(UPDATE_NEW_PAYMENT);
export const successUpdateNewPayment = createAction(SUCCESS_UPDATE_NEW_PAYMENT);
