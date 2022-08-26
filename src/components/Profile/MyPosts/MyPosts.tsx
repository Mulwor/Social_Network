import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, onPostActionChange, PostPropsType} from "../../../redux/state";


const MyPosts = (props: PostPropsType) => {
    const postsElements = props.postsData.map (p =>
        <Post message={p.message} likesCount={p.likesCount} key={p.id} />
    );

    const newPostElement= React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
         let textAdd = newPostElement.current?.value
         props.dispatch(addPostActionCreator(textAdd))
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        props.dispatch(onPostActionChange(text)})
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
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
}

export default MyPosts;