import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/Hello';

const container = document.getElementById('main');
ReactDOM.render(
    <Hello />, 
    container
);