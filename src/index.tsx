import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import 'border-box.css';

import App from './components/App';

import { printAscii } from './utils';

printAscii();

ReactDOM.render(<App />, document.getElementById('groot'));
