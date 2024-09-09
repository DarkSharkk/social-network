import { Post } from "./Post/Post";
import data from "./../../../data/data.json";
import styles from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <div className={styles.container}>
            <h2>My Posts</h2>

            {data.posts.map((post) => (
                <Post key={post.userName} name={post.userName} location={post.location} />
            ))}
        </div>
    );
}