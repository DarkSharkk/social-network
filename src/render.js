import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const renderEntireTree = (state) => {
    ReactDOM.render(<App data={state} />, document.getElementById('root'))
};