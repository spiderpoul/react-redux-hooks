import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import { setSearchFilter, setSorting, setCategoryFilter } from '../actions/actions';

export const useSearch = () => {
    const dispatch = useDispatch();
    const search = useSelector(state => state.filters.search);

    return [search, useCallback(value => dispatch(setSearchFilter(value)), [dispatch])];
};

export const useCategory = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.filters.category);

    return [category, useCallback(value => dispatch(setCategoryFilter(value)), [dispatch])];
};

export const useSort = () => {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.filters.sort);

    return [sort, useCallback(value => dispatch(setSorting(value)), [dispatch])];
};
