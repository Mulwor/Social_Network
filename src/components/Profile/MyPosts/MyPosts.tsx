import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


type DialogType = {
    id: number,
    message: string,
    likesCount: number,
}

type addPostType = {
    addPost: () => void
}

export type PostPropsType = {
    postsData: DialogType[],
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
        props.addPost();
        props.updateNewPostText("")
    }

    const onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text || '')
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