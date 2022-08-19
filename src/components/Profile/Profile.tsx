import React from 'react';
//import s from './Profile.module.css;
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.posts}/>
        </div>
    )
}

export default Profile;