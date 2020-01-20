import { FETCH_NEWS_SUCCESS } from '../actions/actions';

const initialState = {
    items: [],
};

const newsReducer = (state = initialState, action) => {
    if (action.type === FETCH_NEWS_SUCCESS) {
        return {
            items: action.payload.news,
        };
    }

    return state;
};

export default newsReducer;
