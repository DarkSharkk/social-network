import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer.tsx";
import { ProfileInfoContainer } from "./ProfileInfo/ProfileInfoContainer";

import styles from "./Profile.module.css"

export const Profile: React.FC = () => {
	return (
    	<div className={styles.content}>
			<ProfileInfoContainer />
			<MyPostsContainer />
		</div>
	);
};
