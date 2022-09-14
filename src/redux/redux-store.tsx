import {combineReducers, createStore} from "redux";
import profileRedгcer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";


let reducers = combineReducers({
    profilePage: profileRedгcer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
})


let store = createStore(reducers);

export default store