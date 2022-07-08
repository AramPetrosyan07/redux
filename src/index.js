import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer/rootReducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const thunkMiddleware = thunk
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


