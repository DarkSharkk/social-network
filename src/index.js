import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import App from './App';

const renderEntireTree = (store) => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'))
};

renderEntireTree(store);
store.subscribe(() => renderEntireTree(store));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
