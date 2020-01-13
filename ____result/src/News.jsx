import React from 'react';

import ItemComponent from './ItemComponent';
import useNews from './hooks/useNews';
import FiltersBar from './FiltersBar/FiltersBar';

const News = () => {
    const { isLoading, news } = useNews();

    if (isLoading) { return <div className="loader" />; }

    return (
        <>
            <FiltersBar />
            {news.map((item, index) => (
                <ItemComponent key={item.id} index={index} item={item} />
            ))}
        </>
    );
};

export default News;
