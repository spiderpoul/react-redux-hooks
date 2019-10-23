import React from 'react';
import { render } from 'react-dom';
import App from './app';

import './styles.css';

const root = document.createElement('container');
document.body.appendChild(root);

render(<App />, root);