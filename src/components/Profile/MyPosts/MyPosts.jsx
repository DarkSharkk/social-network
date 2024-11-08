import React from "react";
import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";

const AddPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.textForm}>
            <Field name="post" component="textarea" />
            <button>send</button>
        </form>
    );
};

const AddPostReduxForm = reduxForm({ form: 'profile' })(AddPostForm);

export const MyPosts = ({ posts, addPost }) => {
    const onAddPost = (formData) => addPost(formData.post);

    return (
        <div className={styles.container}>
            <h2>My Posts</h2>

            <AddPostReduxForm onSubmit={onAddPost} />

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