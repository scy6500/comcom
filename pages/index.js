import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { titleAction, getArticleRequestAction, enterBlankAction } from "../reducers"

const home = () => {
    const title = useSelector((state) => state.title);
    const result = useSelector((state) => state.result);
    const dispatch = useDispatch();
    const onClick = useCallback((title) => () => {
        if (title.length === 0) {
            dispatch(enterBlankAction());
        }
        else {
            dispatch(getArticleRequestAction(title));
        }
      }, []);
    return (
        <>
            <h2>커먼컴퓨터 온라인 과제</h2>
            <h3>generate article with gpt2</h3>
            <div>input title of article</div>
            <input
                value={title}
                onChange={(e) => dispatch(titleAction(e.currentTarget.value))}
            />
            <button onClick={onClick(title)}>enter</button>
            <div>{result}</div>
        </>
    )
}

export default home