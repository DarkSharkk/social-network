import React from "react";
import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";

export const MyPosts = ({ posts, postText, postTextChangeHandler, addPostHandler }) => {
    const textRef = React.createRef();

    const onPostTextChange = () => postTextChangeHandler(textRef.current.value);

    const onAddPost = () => addPostHandler();

    return (
        <div className={styles.container}>
            <h2>My Posts</h2>

            <div className={styles.textForm}>
                <textarea name="post" id="post" ref={textRef} value={postText} onChange={onPostTextChange} />
                <button onClick={onAddPost}>send</button>
            </div>

            {posts.map((post) => (
                <Post 
                    key={post.userName} 
                    name={post.userName}
                    location={post.location} 
                />
            ))}
        </div>
    );
}