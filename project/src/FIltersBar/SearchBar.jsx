import React from 'react';
import { DebounceInput } from 'react-debounce-input';

function SearchBar() {
    return (
        <DebounceInput
            className="search-bar"
            minLength={2}
            debounceTimeout={500}
            onChange={() => {}}
        />
    );
}

export default SearchBar;
