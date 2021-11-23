import { call, put, takeEvery } from "redux-saga/effects";
import { REQUEST_LESSON, REQUEST_POST_LESSON } from "../redux/lesson/lessonTypes";
import { REQUEST_MEMBER, } from "../redux/member/memberTypes";
import { getAPIs, postAPIs } from "../apis";
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

function* postRequest(action) {
    let path = action.payload.api.path;
    let params = action.payload.api.params;
    let body = action.payload.api.body;
    let success = action.payload.actions.success;
    let failure = action.payload.actions.failure;

    if (_.isEmpty(path)) {
        yield put({ type: failure, error: "API Path is mandatory" });
    }

    try {
        const res = yield call(postAPIs, { path, params, body });
        yield put({ type: success, payload: res });
    } catch (error) {
        yield put({ type: failure, error });
    }
}

function* rootSaga() {
    yield takeEvery(REQUEST_LESSON, fetchRequest);
    yield takeEvery(REQUEST_MEMBER, fetchRequest);
    yield takeEvery(REQUEST_POST_LESSON, postRequest);
}

export default rootSaga;
