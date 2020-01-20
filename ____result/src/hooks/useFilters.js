import { useSelector, useDispatch } from 'react-redux';

import { setSearchFilter, setSorting, setCategoryFilter } from '../actions/actions';

export const useReduxValue = (selector, setValue) => {
    const dispatch = useDispatch();
    const value = useSelector(selector);

    return [value, value => dispatch(setValue(value))];
};

export const searchSelector = state => state.filters.search;
export const sortSelector = state => state.filters.sort;
export const categorySelector = state => state.filters.category;

export const useSearch = () => useReduxValue(searchSelector, setSearchFilter);

export const useSort = () => useReduxValue(sortSelector, setSorting);

export const useCategory = () => useReduxValue(categorySelector, setCategoryFilter);


export const useFilters = () => {
    const [search] = useSearch();
    const [sort] = useSort();
    const [category] = useCategory();

    return {
        search,
        sort,
        category,
    };
};
