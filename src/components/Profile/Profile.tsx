import React from 'react';
//import s from './Profile.module.css;
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


export type ProfilePagePropsType = {
    profilePage: ProfilePageType,
    newPostText: string,
    addPost: () => void
    updateNewPostText: (newPostText: string) => void
}

const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData = {props.profilePage.posts}
                newPostText = {props.newPostText}
                updateNewPostText={props.updateNewPostText}  //6
                addPost = {props.addPost}
            />
        </div>
    )
}

export default Profile;