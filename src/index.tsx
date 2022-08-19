import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state'         // 1. Создали файл и импортировали


ReactDOM.render(<App state={state} />, document.getElementById('root')); //2.