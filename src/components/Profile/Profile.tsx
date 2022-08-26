import React from 'react';
//import s from './Profile.module.css;
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";


export type ProfilePagePropsType = {
    profilePage: ProfilePageType,
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData = {props.profilePage.posts}
                newPostText = {props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile;