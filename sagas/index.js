import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import { getArticleSuccessAction, getArticleFailureAction, GET_ARTICLE_REQUEST } from "../reducers/index"


async function getArticleApi(data) {
    const url = "https://main-gpt2-article-large2-bakjiho.endpoint.ainize.ai/api/?input="
    const result = await fetch(url + data, ["get"])
    const article = await result.text()
    return article
}

function* getArticle(action) {
    try {
        const result = yield call(getArticleApi, action.data)
        yield put(getArticleSuccessAction(result));
    }
    catch (err) {
        console.log(err)
        yield put(getArticleFailureAction(err));
    }
}

function* watchResult() {
    yield takeLatest(GET_ARTICLE_REQUEST, getArticle)
}

export default function* rootSaga() {
    yield all([
        fork(watchResult)
    ])
}