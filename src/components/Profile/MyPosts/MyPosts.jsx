import { Post } from "./Post/Post";
import styles from "./MyPosts.module.css";

export const MyPosts = ({ posts }) => {
    return (
        <div className={styles.container}>
            <h2>My Posts</h2>

            {posts.map((post) => (
                <Post key={post.userName} name={post.userName} location={post.location} />
            ))}
        </div>
    );
}