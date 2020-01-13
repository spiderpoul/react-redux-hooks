import React from 'react';
import Select from 'react-select';

import { SORT_OPTIONS } from '../constants';
import { useSort } from '../hooks/useFilters';

function Sorting() {
    const [sort, setSort] = useSort();

    return (
        <Select
            className="sort-filter"
            value={sort}
            onChange={setSort}
            options={SORT_OPTIONS}
            placeholder="Select sorting"
        />
    );
}

export default Sorting;
