import React from 'react';

import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import Sorting from './Sorting';

function FiltersBar() {
    return (
        <div className="filters-bar">
            <SearchBar />
            <CategoryFilter />
            <Sorting />
        </div>
    );
}

export default FiltersBar;
