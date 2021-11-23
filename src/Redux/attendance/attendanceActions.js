import { createAction } from "redux-actions";
import { 
    UPDATE_ATT_STATUS, 
    UPDATE_DATE,
    SELECT_LESSON,
    REQUEST_FAILURE,
    REQUEST_DAY_LESSON,
    REQUEST_SUCCESS_DAY_LESSON,
    REQUEST_LESSON_ATTENDANCE,
    REQUEST_LESSON_ATTENDANCE_SUCCESS
} from "./attendanceType";

export const updateAttStatus = createAction(UPDATE_ATT_STATUS);
export const updateDate = createAction(UPDATE_DATE);
export const selectLesson = createAction(SELECT_LESSON);

export const fetchDayLessonRequest = createAction(REQUEST_DAY_LESSON);
export const fetchDayLessonSuccess = createAction(REQUEST_SUCCESS_DAY_LESSON);
export const fetchDayLessonFailure = createAction(REQUEST_FAILURE);

export const fetchLessonAttendanceRequest = createAction(REQUEST_LESSON_ATTENDANCE);
export const fetchLessonAttendanceSuccess = createAction(REQUEST_LESSON_ATTENDANCE_SUCCESS);