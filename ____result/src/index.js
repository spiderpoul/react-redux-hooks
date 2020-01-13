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
