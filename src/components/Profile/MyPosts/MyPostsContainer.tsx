import React from 'react';
import {addPostActionCreator, onPostActionChange} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import {PostPropsType} from "../../../redux/store";


type PostContainer = {
    store: any
}

const MyPostsContainer = (props: PostContainer) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator);
    }

    let onPostChange = (text: string) => {
        let action = onPostActionChange(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText = {onPostChange}
                 addPost = {addPost}
                 postsData = {state.profilePage.posts}
                 newPostText = {state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;