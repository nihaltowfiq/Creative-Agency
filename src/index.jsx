import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthCtxProvider } from './store';

ReactDOM.render(
    <AuthCtxProvider>
        <App />
    </AuthCtxProvider>,
    document.getElementById('root')
);
