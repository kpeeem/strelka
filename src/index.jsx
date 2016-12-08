import React from 'react';
import ReactDOM from 'react-dom';
import {List, Map} from 'immutable';

import VectorApp from './components/VectorApp';

function run() {
    ReactDOM.render(<VectorApp />, document.getElementById('app'));
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (typeof window !== 'undefined'){
    if (loadedStates.includes(document.readyState) && document.body) {
        run();
    } else {
        window.addEventListener('DOMContentLoaded', run, false);
    }
}

module.exports = VectorApp;