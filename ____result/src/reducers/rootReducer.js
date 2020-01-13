import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
    filters: filtersReducer,
    news: newsReducer,
});

export default rootReducer;
