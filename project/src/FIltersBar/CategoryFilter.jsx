import React from 'react';
import Select from 'react-select';

import { CATEGORIES_OPTIONS } from '../constants';


function CategoryFilter() {
    return (
        <Select
            className="category-filter"
            isMulti
            value={{}}
            onChange={() => {}}
            options={CATEGORIES_OPTIONS}
            placeholder="Select category"
        />
    );
}

export default CategoryFilter;
