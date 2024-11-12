import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// Set the default base URL for Axios
axios.defaults.baseURL = 'http://127.0.0.1:8000';

// Set the default Authorization header for Axios
axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('authToken')}`;

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);