import { createAction } from "redux-actions";
import {
    UPDATE_PAYMENT,
    REQUEST_PAYMENT,
    REQUEST_SUCCESS_TODAY_LESSON,
    REQUEST_FAILURE_PAYMENT,
    REQUEST_PAYMENT_ONE,
    REQUEST_SUCCESS_TODAY_PAYMENT,
} from "./paymentType";

export const updatePayment = createAction(UPDATE_PAYMENT);

export const reauestPayment = createAction(REQUEST_PAYMENT);
export const requestSuccessTodayPayment = createAction(
    REQUEST_SUCCESS_TODAY_LESSON
);
export const reauestSuccessTodayPayment = createAction(
    REQUEST_SUCCESS_TODAY_PAYMENT
);
export const requestPaymentOne = createAction(REQUEST_PAYMENT_ONE);
