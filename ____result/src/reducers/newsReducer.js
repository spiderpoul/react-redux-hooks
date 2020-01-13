import { createReducer } from '@reduxjs/toolkit';

import { FETCH_NEWS_SUCCESS } from '../actions/actions';

const initialState = {
    items: [],
};

const newsReducer = createReducer(initialState, {
    [FETCH_NEWS_SUCCESS]: (state, action) => ({
        ...state,
        items: action.payload.news,
    }),
});

export default newsReducer;
