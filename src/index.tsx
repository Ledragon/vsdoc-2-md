import './content/style.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';

const container = document.getElementsByClassName('viewport')[0];
ReactDOM.render(
    <App />,
    container
);