import './content/style.css';
import './content/overrides.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';

const container = document.getElementById('main');
ReactDOM.render(
    <App />,
    container
);