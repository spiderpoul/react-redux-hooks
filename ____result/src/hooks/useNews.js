import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stringify } from 'query-string';

import { API_URL } from '../constants';
import { setNews } from '../actions/actions';

import { useFilters } from './useFilters';

const useNews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.items);
    const { category, search, sort } = useFilters();

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}/${sort.value}?${stringify({
            query: search, tags: category ? category.map(x => x.value).join(',') : '',
        })}`)
            .then(response => response.json())
            .then(response => response.hits)
            .then((json) => {
                dispatch(setNews(json));
                setIsLoading(false);
            });
    }, [dispatch, category, search, sort]);

    return { news, isLoading };
};

export default useNews;
