import React from 'react';
import Select from 'react-select';

import { CATEGORIES_OPTIONS } from '../constants';
import { useCategory } from '../hooks/useFilters';


function CategoryFilter() {
    const [category, setCategory] = useCategory();

    return (
        <Select
            className="category-filter"
            isMulti
            value={category}
            onChange={setCategory}
            options={CATEGORIES_OPTIONS}
            placeholder="Select category"
        />
    );
}

export default CategoryFilter;
