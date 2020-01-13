export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SORTING = 'SET_SORTING';

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';

// action creators:

export const setSearchFilter = search => ({
    type: SET_SEARCH_FILTER,
    payload: { search },
});

export const setCategoryFilter = category => ({
    type: SET_CATEGORY_FILTER,
    payload: { category },
});

export const setSorting = sort => ({
    type: SET_SORTING,
    payload: { sort },
});

export const setNews = news => ({
    type: FETCH_NEWS_SUCCESS,
    payload: { news },
});
