import produce from "immer";

const initialState = {
    title: "",
    result: ""
}

export const CHANGE_TITLE = "CHANGE_TITLE";
export const ENTER_BLANK = "ENTER_BLANK";
export const GET_ARTICLE_REQUEST = "GET_ARTICLE_REQUEST";
export const GET_ARTICLE_SUCCESS = "GET_ARTICLE_SUCCESS";
export const GET_ARTICLE_FAILURE = "GET_ARTICLE_FAILURE";

export const titleAction = (data) => {
    return {
        type: CHANGE_TITLE,
        data
    }
}

export const enterBlankAction = () => {
    return {
        type: ENTER_BLANK,
    }
}

export const getArticleRequestAction = (data) => {
    return {
        type: GET_ARTICLE_REQUEST,
        data
    }
}

export const getArticleSuccessAction = (data) => {
    return {
        type: GET_ARTICLE_SUCCESS,
        data
    }
}

export const getArticleFailureAction = (err) => {
    return {
        type: GET_ARTICLE_FAILURE,
        err
    }
}

const rootReducer = (state=initialState, action) => produce(state, (draft) => {
        switch (action.type) {
            case CHANGE_TITLE:
                draft.title = action.data;
                break;
            case ENTER_BLANK:
                draft.result = "enter title";
                break;
            case GET_ARTICLE_REQUEST:
                draft.result = "now loading..."
                break;
            case GET_ARTICLE_SUCCESS:
                draft.result = action.data
                break;
            case GET_ARTICLE_FAILURE:
                draft.result = action.error
                break;
            default:
                break;
        }
    });

export default rootReducer