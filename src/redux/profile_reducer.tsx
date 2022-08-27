import {ActionsTypes, PostPropsType, PostType, ProfilePagePropsType, ProfilePageType, RootStateType} from "./state";

export type addPostActionCreatorType = {
    type:'ADD-POST'
    postText: string
}
export type onPostActionChangeType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = (postText: string) => ({
        type: ADD_POST,
        postText } as const
)

export const onPostActionChange = (text: string) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text ? text : "" } as const
)

const profileRedгcer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state;
    }

    return state;
}



export default profileRedгcer