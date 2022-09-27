import {combineReducers, createStore} from "redux";
import profileRedгcer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";


export let rootReducers = combineReducers({
    profilePage: profileRedгcer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType <typeof rootReducers>

let store = createStore(rootReducers);
export default store