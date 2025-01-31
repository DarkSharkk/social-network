import React from "react";
import { Post, PostProps } from "./Post/Post.tsx";
import styles from "./MyPosts.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControl/FormControl.jsx";
import { required, maxLengthCreator } from "../../../utils/validation.js";

type Props = {
    posts: PostProps[],
    addPost: (post: PostProps) => void,
};

const maxLength50 = maxLengthCreator(50);

const AddPostForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.textForm}>
            <Field 
                name="post"
                placeholder="Enter name"
                component={Textarea}
                validate={[ required, maxLength50 ]}
            />
            <button>send</button>
        </form>
    );
};

const AddPostReduxForm = reduxForm({ form: 'profile' })(AddPostForm);

export const MyPosts: React.FC<Props> = ({ posts, addPost }) => {
    const onAddPost = (formData) => addPost(formData.post);

    return (
        <div className={styles.container}>
            <h2>My Posts</h2>

            <AddPostReduxForm onSubmit={onAddPost} />

            {posts.map((post) => (
                <Post 
                    key={post.userName} 
                    userName={post.userName}
                    location={post.location} 
                />
            ))}
        </div>
    );
}