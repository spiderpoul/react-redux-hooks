import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import { useSearch } from '../hooks/useFilters';

function SearchBar() {
    const [search, setSearch] = useSearch();

    return (
        <DebounceInput
            className="search-bar"
            minLength={2}
            debounceTimeout={500}
            onChange={event => setSearch(event.target.value)}
        />
    );
}

export default SearchBar;
