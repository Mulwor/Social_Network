import React from 'react';
import {addPostActionCreator, onPostActionChange} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";



const MyPostsContainer = () => {
    return (
        // С помощью данного синтаксиса обращаемся в StoreContext
        <StoreContext.Consumer>
            {
                (store) => {
                let state = store.getState()

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text: string) => {
                    let action = onPostActionChange(text);
                    store.dispatch(action);
                }

                return <MyPosts
                         updateNewPostText={onPostChange}
                         addPost={addPost}
                         postsData={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
            }
         }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;