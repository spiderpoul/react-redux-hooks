import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/index.scss';

const root = document.createElement('container');
document.body.appendChild(root);


const render = () => {
    ReactDOM.render(<App />, root,
    );
};

render();
