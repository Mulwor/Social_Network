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
    newPostText: string,
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
export type AddPostActionType = {
    type: 'ADD-POST',
    postText: string
}
export type ChangeNewTextActionType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType

//APP
export type PropsTypeForAPP = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

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
            ]
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
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._onChange()

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._onChange()
        }
    }
}


export const addPostActionCreator = (textAdd: any) => {
    return { type: 'ADD-POST', postText: textAdd ? textAdd : ""}
}
export const onPostActionChange = (text: any) => {
    return { type: "UPDATE-NEW-POST-TEXT", newText: text ? text : ""}
}


// @ts-ignore
window.state = store.getState()

export default store
