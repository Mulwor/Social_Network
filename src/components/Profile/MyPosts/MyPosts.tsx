import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {PostType} from "../../../redux/state";

export type PostPropsType = {
    postsData: PostType[],
    newPostText: string,
    addPost: () => void
    updateNewPostText: (value: string) => void
}

const MyPosts = (props: PostPropsType) => {
    let postsElements = props.postsData.map (p =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    );

    let newPostElement= React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // props.addPost();
        props.dispatch({type: 'ADD-POST'})
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;