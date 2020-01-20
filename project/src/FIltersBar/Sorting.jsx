import React from 'react';
import Select from 'react-select';

import { SORT_OPTIONS } from '../constants';

function Sorting() {
    return (
        <Select
            className="sort-filter"
            value={{}}
            onChange={() => {}}
            options={SORT_OPTIONS}
            placeholder="Select sorting"
        />
    );
}

export default Sorting;
