import { call, put, takeEvery } from "redux-saga/effects";
import { getLessonsAPI } from "../apis/lessons/lessonAPI";
import {
    REQUEST_LESSON,
    REQUEST_SUCCESS_LESSON,
    REQUEST_FAILURE_LESSON,
} from "../redux/lesson/lessonTypes";
import {
    REQUEST_MEMBER,
    REQUEST_SUCCESS_MEMBER,
    REQUEST_FAILURE_MEMBER,
} from "../redux/member/memberTypes";

import { getAPIs } from "../apis";
import _ from "lodash";

function* fetchRequest(action) {
    let path = action.payload.api.path;
    let params = action.payload.api.params;
    let success = action.payload.actions.success;
    let failure = action.payload.actions.failure;

    if (_.isEmpty(path)) {
        yield put({ type: failure, error: "API Path is mandatory" });
    }

    try {
        const res = yield call(getAPIs, { path, params });
        yield put({ type: success, payload: res });
    } catch (error) {
        yield put({ type: failure, error });
    }
}

function* rootSaga() {
    yield takeEvery(REQUEST_LESSON, fetchRequest);
    yield takeEvery(REQUEST_MEMBER, fetchRequest);
}

export default rootSaga;
