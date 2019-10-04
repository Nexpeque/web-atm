import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log('request:'
        , request);
    return request;
}, error => {
    console.log('error:'
        , error);
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
