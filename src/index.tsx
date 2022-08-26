import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {RootStateType} from './redux/state'
import {BrowserRouter} from "react-router-dom";

 let rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}
                 /* Привязываем контекст(bind), он позволяет зафиксировать this. Берет функцию addpost и соединяет со стором

                  let user = {  firstName: "Вася" };
                  function func() { alert(this.firstName); }
                  let funcUser = func.bind(user);
                  funcUser(); // Вася

                  Здесь func.bind(user) – это «связанный вариант» func, с фиксированным this=user.
                  */
            />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree);