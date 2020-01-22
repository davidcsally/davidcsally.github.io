import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { printAscii } from './utils';

printAscii();

ReactDOM.render(<App />, document.getElementById('groot'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
