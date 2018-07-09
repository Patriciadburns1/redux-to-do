import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; 
import {createStore, applyMiddleware} from 'redux'; 
import rootReducer from './reducers'; 
import reduxPromise from 'redux-promise'; 
import {BrowserRouter as Router} from 'react-router-dom'; 

import App from './components/app';

const store = createStore(rootReducer, {}, applyMiddleware(reduxPromise)); 

ReactDOM.render(
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>, 
    document.getElementById('root')
);
