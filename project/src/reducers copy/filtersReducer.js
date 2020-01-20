import { createReducer } from '@reduxjs/toolkit';

import { SET_SEARCH_FILTER, SET_CATEGORY_FILTER, SET_SORTING } from '../actions/actions';
import { SORT_OPTIONS } from '../constants';

const initialState = {
    search: '',
    sort: SORT_OPTIONS[0],
    category: [],
};

const filtersReducer = createReducer(initialState, {
    [SET_SEARCH_FILTER]: (state, action) => ({
        ...state,
        search: action.payload.search,
    }),
    [SET_CATEGORY_FILTER]: (state, action) => ({
        ...state,
        category: action.payload.category,
    }),
    [SET_SORTING]: (state, action) => ({
        ...state,
        sort: action.payload.sort,
    }),
});

export default filtersReducer;
