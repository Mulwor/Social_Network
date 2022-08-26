import React from 'react';
//import s from './Profile.module.css;
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagePropsType} from "../../redux/state";

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