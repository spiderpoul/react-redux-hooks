import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API_URL } from '../constants';
import { setNews } from '../actions/actions';

const useNews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.items);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}`)
            .then(response => response.json())
            .then(response => response.hits)
            .then((json) => {
                dispatch(setNews(json));
                setIsLoading(false);
            });
    }, [dispatch]);

    return { news, isLoading };
};

export default useNews;
