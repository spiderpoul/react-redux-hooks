- [Пререквизиты](#%d0%9f%d1%80%d0%b5%d1%80%d0%b5%d0%ba%d0%b2%d0%b8%d0%b7%d0%b8%d1%82%d1%8b)
- [Начало работы](#%d0%9d%d0%b0%d1%87%d0%b0%d0%bb%d0%be-%d1%80%d0%b0%d0%b1%d0%be%d1%82%d1%8b)
- [Используем React Hooks](#%d0%98%d1%81%d0%bf%d0%be%d0%bb%d1%8c%d0%b7%d1%83%d0%b5%d0%bc-react-hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [Custom Hook](#custom-hook)
- [Подключаем Redux](#%d0%9f%d0%be%d0%b4%d0%ba%d0%bb%d1%8e%d1%87%d0%b0%d0%b5%d0%bc-redux)
- [Добавляем поиск](#%d0%94%d0%be%d0%b1%d0%b0%d0%b2%d0%bb%d1%8f%d0%b5%d0%bc-%d0%bf%d0%be%d0%b8%d1%81%d0%ba)
- [Бонус! Подключаем React Router](#%d0%91%d0%be%d0%bd%d1%83%d1%81-%d0%9f%d0%be%d0%b4%d0%ba%d0%bb%d1%8e%d1%87%d0%b0%d0%b5%d0%bc-react-router)

## Пререквизиты

Для начала работы на вашем компьютере должны быть:

1. Установлен Visual Studio Code. Скачать можно тут <https://code.visualstudio.com/>
2. Установлен Node.js. Скачиваем тут <https://nodejs.org/en/>
3. Установлен npm или yarn. Yarn скачиваем тут <https://yarnpkg.com/en/docs/install>
4. Хорошее настроение, время, налитый горячий чай или кофе.

## Начало работы

1. Открываем проект в Visual Studio Code.
2. Устанавливаем зависимости npm install (yarn)
3. Запускаем проект npm run start (yarn run start)
4. Открываем наш проект на порту 8080 – <http://localhost:8080>
5. Видим проект со статьями

## Используем React Hooks

**React Hooks** — это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из функциональных компонентов.

В компоненте `News.jsx` вместо класса используем функцию:

```js
const News = () => {
  if (isLoading)
    // isLoading ?
    return <div className="loader" />;

  return news.map((
    item,
    index // news ?
  ) => <ItemComponent key={item.id} index={index} item={item} />);
};
```

### useState

Используем `useState` чтобы наделить наш функциональный компонент внутренним состоянием. Единственный аргумент useState — это начальное состояние.

```js
  import React, { useState } from "react"; // импортируем useState

  ...

  const News = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    ...
  }
```

Вызов useState возвращает две вещи: текущее значение состояния и функцию для его обновления.

### useEffect

Теперь необходимо сделать так, чтобы при отображении компонента у нас подгружались данные. В классовом компоненте мы делали это делали, используя life cycle метод класса `componentDidMount`:

```js
  // вызывается сразу после монтирования (то есть, вставки компонента в DOM)
  componentDidMount() {
      this.setState({ isLoading: true })
     fetch(`${API_URL}`)
          .then(response => response.json())
          .then(response => response.hits)
          .then(json => this.setState({ news: json, isLoading: false }));
  }
```

А сейчас, давайте рассмотрим, как мы можем сделать то же самое с использованием хука `useEffect`.

```js
  import React, { useState, useEffect } from "react";

  const News = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${API_URL}`)
            .then(response => response.json())
            .then(response => response.hits)
            .then(json => {
                setNews(json);
                setIsLoading(false);
            });
    }, []);

    return {...}
```

React запомнит функцию (то есть «эффект»), которую вы передали и вызовет её после того, как внесёт все изменения в DOM. `useEffect` имеет второй необязательный параметр - массив зависимостей. Если мы хотим, чтобы эффект запустился один раз, то необходимо передать пустой массив.

### Custom Hook

Было бы здорово вынести всю логику в отдельный хук, чтобы наш компонент выглядел так:

```js
  import React from "react";
  import useNews from './hooks/useNews'

  const News = () => {
    const {isLoading, news} = useNews();

    return {...}
```

Теперь сделаем свой кастомный хук `useNews` и вынесем всю логику получения данных в неё. Для этого создадим новый файл `useNews.js` в папке `./hooks`:

```js
  import { useState, useEffect } from 'react';

  import { API_URL } from '../constants';

  const useNews = () => {
      const [news, setNews] = useState([]);
      const [isLoading, setIsLoading] = useState(false);

      useEffect(() => {
          setIsLoading(true);
          fetch(`${API_URL}`)
              .then(response => response.json())
              .then(response => response.hits)
              .then((json) => {
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
  const {isLoading, news} = useNews();
```

## Подключаем Redux

## Добавляем поиск

## Бонус! Подключаем React Router
