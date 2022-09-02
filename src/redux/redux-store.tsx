import {combineReducers, createStore} from "redux";
import profileRedгcer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

/* Вспомогательная функция combineReducers преобразует объект, значениями которого являются различные функции редюсеры, в одну функцию редюсер, которую можно передать в метод createStore.

Результирующий редюсер вызывает вложенные редюсеры и собирает их результаты в единый объект состояния. Состояние, созданное именами combineReducers(), сохраняет состояние каждого редуктора под их ключами,
 переданные в combineReducers() */

let reducers = combineReducers({
    profilePage: profileRedгcer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

export default store