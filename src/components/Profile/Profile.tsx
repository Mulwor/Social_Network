import React from 'react';
//import s from './Profile.module.css;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type Profilete= {
    store: any
}

const Profile = (props: Profilete) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store = {props.store}/>
        </div>
    )
}

export default Profile;