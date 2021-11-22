import { call, put, takeEvery } from 'redux-saga/effects'
import { getLessonsAPI } from "../apis/lessons/lessonAPI";
import {
    LESSON_FETCH_REQUEST, LESSON_FETCH_FAILURE, LESSON_FETCH_SUCCESS
} from "../redux/reducers/lessonsReducer";

function* fetchLessons(action) {
    console.log("Fetch Lessons : ", action);
    try {
        const lessons = yield call(getLessonsAPI);
        yield put({ type: LESSON_FETCH_SUCCESS, lessons});
    } catch (error) {
        yield put({ type: LESSON_FETCH_FAILURE, error });
    }
}

function* rootSaga() {
    yield takeEvery(LESSON_FETCH_REQUEST, fetchLessons);
}

export default rootSaga;