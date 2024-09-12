import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";
import React from "react";

export const MyPosts = ({ posts, addPost }) => {
    const textRef = React.createRef();

    return (
        <div className={styles.container}>
            <h2>My Posts</h2>

            <div className={styles.textForm}>
                <textarea name="post" id="post" ref={textRef}></textarea>
                <button onClick={() => {console.log(textRef.current.value); return addPost(textRef.current.value)}}>send</button>
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