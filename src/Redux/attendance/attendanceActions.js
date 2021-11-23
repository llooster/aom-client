import { createAction } from "redux-actions";
import { 
    UPDATE_ATT_STATUS, 
    UPDATE_DATE,
    REQUEST_DAY_LESSON,
    REQUEST_SUCCESS_DAY_LESSON,
    REQUEST_FAILURE_DAY_LESSON
} from "./attendanceType";

export const updateAttStatus = createAction(UPDATE_ATT_STATUS);
export const updateDate = createAction(UPDATE_DATE);

export const fetchDayLessonRequest = createAction(REQUEST_DAY_LESSON);
export const fetchDayLessonSuccess = createAction(REQUEST_SUCCESS_DAY_LESSON);
export const fetchDayLessonFailure = createAction(REQUEST_FAILURE_DAY_LESSON);