import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
// import {addPostActionCreator, onPostActionChange} from "../../../redux/profile_reducer";
import {PostType} from "../../../redux/store";
import {MyPostType} from "./MyPostsContainer";

type PostPropsType = {
    postsData: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostType) => {
    const postsElements = props.posts.map(p =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    );

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const onAddPost = (props: any) => {
        if (newPostElement && newPostElement.current) {
            props.addPost();
        }
    }
    const onPostChange = (props: any) => {
        if (newPostElement && newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }
    }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  ref={newPostElement}
                                  value={props.newPostText}
                        />
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
    }

export default MyPosts;