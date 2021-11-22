import { createAction } from "redux-actions";
import { 
    UPDATE_LESSON_NAME,
    UPDATE_LESSON_DATE,
    UPDATE_LESSON_TIME,
    REGISTER_LESSON,
    ADD_MEMBER_TO_LESSON,
    REQUEST_LESSON,  
    REQUEST_SUCCESS_LESSON,
    REQUEST_FAILURE_LESSON 
} from "./lessonTypes";

export const fetchRequest       = createAction(REQUEST_LESSON);
export const fetchLessonSuccess = createAction(REQUEST_SUCCESS_LESSON);
export const fetchLessonFailure = createAction(REQUEST_FAILURE_LESSON);

export const updateLessonName   = createAction(UPDATE_LESSON_NAME);
export const updateLessonDate   = createAction(UPDATE_LESSON_DATE);
export const updateLessonTime   = createAction(UPDATE_LESSON_TIME);
export const registerLesson     = createAction(REGISTER_LESSON);
export const addMemberToLesson  = createAction(ADD_MEMBER_TO_LESSON);