import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {RootStateType, subscribe, updateNewPostText} from './redux/state'
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

 let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree);