import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <div className={styles.container}>
            <h2>My Posts</h2>

            <Post name="Jack Harlow" location="London" />
        </div>
    );
}