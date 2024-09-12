import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";
import React from "react";

export const MyPosts = ({ posts, addPost, postText, updatePostText }) => {
    const textRef = React.createRef();

    const onPostTextChange = () => {
        updatePostText(textRef.current.value);
    }

    const onAddPost = () => addPost();

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