import { createAction } from "redux-actions";
import {
    INIT_FORM,
    UPDATE_LESSON_NAME,
    UPDATE_LESSON_DAY,
    UPDATE_LESSON_TIME,
    REGISTER_LESSON,
    ADD_MEMBER_TO_LESSON,
    REQUEST_LESSON,
    REQUEST_POST_LESSON,
    REQUEST_FAILURE_LESSON,
    REQUEST_SUCCESS_LESSONS,
    REQUEST_SUCCESS_LESSON_ONE,
    REQUEST_SUCCESS_POST_LESSON,
    REQUEST_NON_MEMBER,
    REQUEST_NON_MEMBER_SUCCESS
} from "./lessonTypes";

export const fetchLessonRequest = createAction(REQUEST_LESSON);
export const fetchLessonFailure = createAction(REQUEST_FAILURE_LESSON);
export const fetchLessonSuccess = createAction(REQUEST_SUCCESS_LESSONS);
export const fetchLessonOneSuccess = createAction(REQUEST_SUCCESS_LESSON_ONE);
export const postLesson         = createAction(REQUEST_POST_LESSON);
export const postLessonSuccess  = createAction(REQUEST_SUCCESS_POST_LESSON);
export const fetchNonMembersRequest = createAction(REQUEST_NON_MEMBER);
export const fetchNonMembersSuccess = createAction(REQUEST_NON_MEMBER_SUCCESS);

export const initForm = createAction(INIT_FORM);
export const updateLessonDay = createAction(UPDATE_LESSON_DAY);
export const updateLessonName = createAction(UPDATE_LESSON_NAME);
export const updateLessonTime = createAction(UPDATE_LESSON_TIME);
export const registerLesson = createAction(REGISTER_LESSON);
export const addMemberToLesson = createAction(ADD_MEMBER_TO_LESSON);
