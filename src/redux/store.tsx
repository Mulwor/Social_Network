// Dialogs
import profileRedгcer, {addPostActionCreatorType, onPostActionChangeType, ProfilePageType} from "./profile_reducer";
import dialogReducer, {sendMessageCreatorType, updateNewMessageBodyCreatorType} from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";
import {DialogPageType} from "../components/Dialogs/Dialogs";



export type SidebarType = {}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SidebarType
}

// OOP with dispatch
export type StoreType = {
    _state: RootStateType,
    _onChange: () => void
    subscribe: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

//APP
export type PropsTypeForAPP = {
    state: RootStateType
    dispatch?: (action: ActionsTypes) => void
}


export type ActionsTypes = onPostActionChangeType | addPostActionCreatorType |
                           sendMessageCreatorType | updateNewMessageBodyCreatorType


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: "it-kamasutra"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            //...
        }
    },
    _onChange() {
        console.log('Hello')
    },
    subscribe(callback) {
        this._onChange = callback;
    },
    getState() {
        return this._state
    },

    dispatch(action: ActionsTypes) {
        this._state.profilePage = profileRedгcer(this._state.profilePage, action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onChange();

    }
}


// @ts-ignore
window.state = store.getState()

export default store
