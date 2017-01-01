// var greeter = require('./Greeter.js');

import React from 'react';
import {
    render
} from 'react-dom';
import Greeter from './Greeter.js';

import './main.css';

render(<Greeter/>, document.getElementById('root'));

// document.getElementById('root').appendChild(greeter());
