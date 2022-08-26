import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {ActionsTypes, PostType} from "../../../redux/state";

export type PostPropsType = {
    postsData: PostType[],
    newPostText: string,
    dispatch: (action: ActionsTypes) => void
}
let addPostActionCreator = () => {
    return
}
const MyPosts = (props: PostPropsType) => {
    let postsElements = props.postsData.map (p =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    );

    let newPostElement= React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // props.addPost();
         props.dispatch({
             type:'ADD-POST',
             postText:newPostElement.current?.value ? newPostElement.current?.value : ""})

    }

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        props.dispatch({
            type: "UPDATE-NEW-POST-TEXT",
            newText: text ? text : ""
        })
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