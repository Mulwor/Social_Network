import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {updateNewPostText} from './redux/state'
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

// addPost("SamuraiJs")
export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>, document.getElementById('root'));
    // 7.5
}