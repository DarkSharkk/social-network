import styles from "./Post.module.css";

export const Post = (props) => {
    return (
        <div className={styles.container}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" />
            <div className={styles.info}>
                <h3>{props.name}</h3>
                <p>{props.location}</p>
            </div>
        </div>
    );
}