import React from 'react';
import {addPostActionCreator, onPostActionChange} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {PostType, RootStateType} from "../../../redux/store";


type mapDispatchToPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

export type MyPostType = mapStateToPropsType & mapDispatchToPropsType

let mapStateToProps = (state: RootStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispathchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = onPostActionChange(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

// Вызвали функцию connect, она вернула нам двойную функцию, и мы вызываем потом ту функцию, который вернул нам предыдущий вызов. Первый вызов настраивает нашу контейнерную компоненту
const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootStateType>(mapStateToProps, mapDispathchToProps)(MyPosts)


export default MyPostsContainer;