import { useState, useEffect } from 'react';

import { API_URL } from '../constants';

const useNews = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}`)
            .then(response => response.json())
            .then(response => response.hits)
            .then((json) => {
                setNews(json);
                setIsLoading(false);
            });
    }, []);

    return { news, isLoading };
};

export default useNews;
