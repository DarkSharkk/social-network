import React from "react";

import styles from "./Post.module.css";

export type PostProps = {
    userName: string,
    location: string,
}

export const Post: React.FC<PostProps> = (props) => {
    return (
        <div className={styles.container}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png" alt="" />
            <div className={styles.info}>
                <h3>{props.userName}</h3>
                <p>{props.location}</p>
            </div>
        </div>
    );
}