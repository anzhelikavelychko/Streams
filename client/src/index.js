import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';

import App from './components/App';


/*const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);*/


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);