// Dialogs
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type DialogsPropsType = {
    state: DialogPageType
}

// Profile
export type PostType = {
    id?: number,
    message: string,
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type PostPropsType = {
    postsData: PostType[],
    newPostText: string | undefined,
    dispatch: (action: ActionsTypes) => void
}
export type ProfilePagePropsType = {
    profilePage: ProfilePageType,
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
}
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
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = onPostActionChangeType | addPostActionCreatorType
type addPostActionCreatorType = {
    type: string
    postText: string | undefined
}
type onPostActionChangeType = {
    type: string
    newText: string
}



export const addPostActionCreator = (textAdd: string | undefined) => ({
        type: ADD_POST,
        postText: textAdd } as const
)

export const onPostActionChange = (text: string | undefined) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text ? text : "" } as const
)

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body: any) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

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
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._onChange()

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._onChange()

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._onChange();

        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._onChange();
        }
    }
}


// @ts-ignore
window.state = store.getState()

export default store
