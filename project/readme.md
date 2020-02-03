- [Пререквизиты](#%d0%9f%d1%80%d0%b5%d1%80%d0%b5%d0%ba%d0%b2%d0%b8%d0%b7%d0%b8%d1%82%d1%8b)
- [Начало работы](#%d0%9d%d0%b0%d1%87%d0%b0%d0%bb%d0%be-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b)
- [Используем React Hooks](#%d0%98%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d1%83%d0%b5%d0%bc-react-hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
      - [snippet #1](#snippet-1)
  - [Custom Hook](#custom-hook)
      - [snippet #2](#snippet-2)
- [Добавляем панель фильтров](#%d0%94%d0%be%d0%b1%d0%b0%d0%b2%d0%bb%d1%8f%d0%b5%d0%bc-%d0%bf%d0%b0%d0%bd%d0%b5%d0%bb%d1%8c-%d1%84%d0%b8%d0%bb%d1%8c%d1%82%d1%80%d0%be%d0%b2)
      - [snippet #3](#snippet-3)
      - [snippet #4](#snippet-4)
      - [snippet #5](#snippet-5)
      - [snippet #6](#snippet-6)
- [Подключаем Redux](#%d0%9f%d0%be%d0%b4%d0%ba%d0%bb%d1%8e%d1%87%d0%b0%d0%b5%d0%bc-redux)
  - [Инициализация](#%d0%98%d0%bd%d0%b8%d1%86%d0%b8%d0%b0%d0%bb%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f)
      - [snippet #7](#snippet-7)
  - [Actions](#actions)
      - [snippet #8](#snippet-8)
  - [Reducers](#reducers)
      - [snippet #9](#snippet-9)
      - [snippet #10](#snippet-10)
        - [snippet #11](#snippet-11)
  - [Redux Hooks](#redux-hooks)
        - [snippet #12](#snippet-12)
        - [snippet #13](#snippet-13)
        - [snippet #14](#snippet-14)
        - [snippet #15](#snippet-15)

## Пререквизиты

Для начала работы на вашем компьютере должны быть:

1. Установлен Visual Studio Code. Скачать можно тут <https://code.visualstudio.com/>
2. Установлен Node.js. Скачиваем тут <https://nodejs.org/en/>
3. Установлен npm или yarn. Yarn скачиваем тут <https://yarnpkg.com/en/docs/install>
4. Расширение Redux DevTools для Chrome <https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en>
5. Хорошее настроение, время, налитый горячий чай или кофе.

## Начало работы

1. Открываем проект в Visual Studio Code.
2. Устанавливаем зависимости npm install (yarn)
3. Запускаем проект npm run start (yarn run start)
4. Открываем наш проект на порту 8080 – <http://localhost:8080>
5. Видим проект со статьями

## Используем React Hooks

**React Hooks** — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов.

В компоненте `News.jsx` вместо класса используем функцию:

```jsx
const News = () => {
    return isLoading ? <div className="loader" /> : // isLoading
        news.map(( // news ?
            item,
            index
        ) => <ItemComponent key={item.id} index={index} item={item} />);
};
```

### useState

Используем `useState` чтобы наделить наш функциональный компонент внутренним состоянием. Единственный аргумент useState — это начальное состояние.

```jsx
  import React, { useState } from "react"; // импортируем useState

  ...

  const News = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    ...
  }
```

Вызов useState возвращает две вещи: текущее значение состояния и функцию для его обновления.

### useEffect

Теперь необходимо сделать так, чтобы при отображении компонента у нас подгружались данные. В классовом компоненте мы делали это, используя life cycle метод класса `componentDidMount`:

```jsx
  // вызывается сразу после монтирования (то есть, вставки компонента в DOM)
  componentDidMount() {
      this.setState({ isLoading: true })
     fetch(`${API_URL}/search_by_date`)
          .then(response => response.json())
          .then(response => response.hits)
          .then(json => this.setState({ news: json, isLoading: false }));
  }
```

А сейчас, давайте рассмотрим, как мы можем сделать то же самое с использованием хука `useEffect`.

##### snippet #1

```jsx
  import React, { useState, useEffect } from "react";

  const News = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}/search_by_date`)
            .then(response => response.json())
            .then(response => response.hits)
            .then(json => {
                setNews(json);
                setIsLoading(false);
            });
    }, []);

    return isLoading ? <div className="loader" /> :
        news.map((
            item,
            index
        ) => <ItemComponent key={item.id} index={index} item={item} />);
```

React запомнит функцию (то есть «эффект»), которую вы передали и вызовет её после того, как внесёт все изменения в DOM. `useEffect` имеет второй необязательный параметр - массив зависимостей. Если мы хотим, чтобы эффект запустился один раз, то необходимо передать пустой массив.

### Custom Hook

Было бы здорово вынести всю логику в отдельный хук, чтобы наш компонент выглядел так:

```jsx
  import React from "react";
  import useNews from './hooks/useNews'

  const News = () => {
    const {isLoading, news} = useNews();

    return {...}
```

Для этого делаем свой кастомный хук `useNews` и вынесем всю логику получения данных в неё. Для этого создадим новый файл `useNews.js` в папке `./hooks`:

##### snippet #2

```jsx
import { useState, useEffect } from "react";

import { API_URL } from "../constants";

const useNews = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}/search_by_date`)
            .then(response => response.json())
            .then(response => response.hits)
            .then(json => {
                setNews(json);
                setIsLoading(false);
            });
    }, []);

    return { news, isLoading };
};

export default useNews;
```

Попробуйте подключить его в файле `News.jsx`, вместо `useState` и `useEffect`:

```js
const { isLoading, news } = useNews();
```

## Добавляем панель фильтров

В файле `News.jsx` добавим панель фильтров:

##### snippet #3

```jsx
...
import FiltersBar from './FiltersBar/FiltersBar';

const News = () => {
    const { isLoading, news } = useNews();

    return (
        <>
            <FiltersBar />
            {!isLoading ? news.map((item, index) => (
                <ItemComponent key={item.id} index={index} item={item} />
            )) : <div className="loader" />}
        </>
    );
};

```

В папке `/FiltersBar` добавим строку поиска, фильтр по категориям и сортировку:

Файл `SearchBar.jsx`:

##### snippet #4

```jsx
import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";

function SearchBar() {
    const [search, setSearch] = useState("");

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
```

Для строки поиска мы будем использовать `DebounceInput`, что поможет нам уменьшить количество запросов на сервер.

Файл `CategoryFilter.jsx`:

##### snippet #5

```jsx
import React, { useState } from "react";
import Select from "react-select";

import { CATEGORIES_OPTIONS } from "../constants";

function CategoryFilter() {
    const [category, setCategory] = useState(null);

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
```

Файл `Sorting.jsx`:

##### snippet #6

```jsx
import React, { useState } from "react";
import Select from "react-select";

import { SORT_OPTIONS } from "../constants";

function Sorting() {
    const [sort, setSort] = useState(SORT_OPTIONS[0]);

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
```

Для того, чтобы использовать фильтры, нам необходимо вынести данные в общее хранилище, для этого будем использовать Redux.

## Подключаем Redux

### Инициализация

Чтобы использовать Redux необходимо обернуть всё приложение в компонент `<Provider>`, чтобы Redux-стор был доступен в дереве компонентов.

В файле `index.js` добавим код:

##### snippet #7

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/rootReducer';
import App from './App';

import './styles/index.scss';

const root = document.createElement('container');
document.body.appendChild(root);

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(rootReducer, {}, reduxDevTools && reduxDevTools());

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root,
    );
};

render();

```

### Actions

Далее переместим хранение новостей и фильтров в Redux-store. Начнём с создания actions. Для этого в папке `actions` создадим файл `actions.js`:

##### snippet #8

```jsx
export const SET_SEARCH_FILTER = 'SET_SEARCH_FILTER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SORTING = 'SET_SORTING';

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';

// action creators:

export const setSearchFilter = search => ({
    type: SET_SEARCH_FILTER,
    payload: { search },
});

export const setCategoryFilter = category => ({
    type: SET_CATEGORY_FILTER,
    payload: { category },
});

export const setSorting = sort => ({
    type: SET_SORTING,
    payload: { sort },
});

export const setNews = news => ({
    type: FETCH_NEWS_SUCCESS,
    payload: { news },
});

```

### Reducers

В папке `reducers` редьюсеры для фильтров и новостей.

`newsReducer.js:`

##### snippet #9

```jsx
import { FETCH_NEWS_SUCCESS } from '../actions/actions';

const initialState = {
    items: [],
};

const newsReducer = (state = initialState, action) => {
    if (action.type === FETCH_NEWS_SUCCESS) {
        return {
            items: action.payload.news,
        };
    }

    return state;
};

export default newsReducer;
```

`filtersReducer.js:`

##### snippet #10

```jsx
import { createReducer } from '@reduxjs/toolkit';

import { SET_SEARCH_FILTER, SET_CATEGORY_FILTER, SET_SORTING } from '../actions/actions';
import { SORT_OPTIONS } from '../constants';

const initialState = {
    search: '',
    sort: SORT_OPTIONS[0],
    category: null,
};

const filtersReducer = createReducer(initialState, {
    [SET_SEARCH_FILTER]: (state, action) => ({
        ...state,
        search: action.payload.search,
    }),
    [SET_CATEGORY_FILTER]: (state, action) => ({
        ...state,
        category: action.payload.category,
    }),
    [SET_SORTING]: (state, action) => ({
        ...state,
        sort: action.payload.sort,
    }),
});

export default filtersReducer;

```

И объединим их в файле `rootReducer.js`, используя `combineReducers`, которое позволяет разбивать стор на отдельные модули:

###### snippet #11

```jsx
import { combineReducers } from 'redux';

import filtersReducer from './filtersReducer';
import newsReducer from './newsReducer';

const rootReducer = combineReducers({
    filters: filtersReducer,
    news: newsReducer,
});

export default rootReducer;
```

### Redux Hooks

Для работы с Redux-store нам понадобятся хуки `useSelector` - для получения данных с redux store и `useDispatch` для получения ссылки на `dispatch` функции.

`useNews.js:`

###### snippet #12

```jsx
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { API_URL } from '../constants';
import { setNews } from '../actions/actions';

const useNews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.items);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}/search_by_date`)
            .then(response => response.json())
            .then(response => response.hits)
            .then((json) => {
                dispatch(setNews(json));
                setIsLoading(false);
            });
    }, [dispatch]);

    return { news, isLoading };
};

export default useNews;
```

Создадим файл `useFilters.js` для описания хуков для фильтров. Опишем селекторы и чтобы избежать дублирования кода используем хелпер `useReduxValue` :

`useFilters.js:`:

###### snippet #13

```jsx
import { useSelector, useDispatch } from 'react-redux';

import { setSearchFilter, setSorting, setCategoryFilter } from '../actions/actions';

export const useReduxValue = (selector, setValue) => {
    const dispatch = useDispatch();
    const value = useSelector(selector);

    return [value, value => dispatch(setValue(value))];
};

// селекторы
export const searchSelector = state => state.filters.search;
export const sortSelector = state => state.filters.sort;
export const categorySelector = state => state.filters.category;

// хуки для фильтров
export const useSearch = () => useReduxValue(searchSelector, setSearchFilter);

export const useSort = () => useReduxValue(sortSelector, setSorting);

export const useCategory = () => useReduxValue(categorySelector, setCategoryFilter);


export const useFilters = () => {
    const [search] = useSearch();
    const [sort] = useSort();
    const [category] = useCategory();

    return {
        search,
        sort,
        category,
    };
};

```

В соответствующих компонентах фильтров делаем замену на наши хуки:

###### snippet #14

```jsx
    // CategoryFilter.jsx
    import { useCategory } from '../hooks/useFilters';
    ...
    const [category, setCategory] = useCategory();

    // SearchBar.jsx
    import { useSearch } from '../hooks/useFilters';
    ...
    const [search, setSearch] = useSearch();

    // Sorting.jsx
    import { useSort } from '../hooks/useFilters';
    ...
    const [sort, setSort] = useSort();
```

Проверяем работу в Redux Dev Tools.

Добавляем фильтры в `useNews`;

###### snippet #15

```jsx
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stringify } from 'query-string';

import { API_URL } from '../constants';
import { setNews } from '../actions/actions';

import { useFilters } from './useFilters';

const useNews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const news = useSelector(state => state.news.items);
    // используем фильтры
    const { category, search, sort } = useFilters();

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}/${sort.value}?${stringify({
            query: search, tags: category ? category.map(x => x.value).join(',') : '',
        })}`)
            .then(response => response.json())
            .then(response => response.hits)
            .then((json) => {
                dispatch(setNews(json));
                setIsLoading(false);
            });
    }, [dispatch, category, search, sort]);

    return { news, isLoading };
};

export default useNews;

```

Обратите внимание на массив зависимостей в `useEffect`, при изменении этих параметров новости будут перезагружаться заново.
