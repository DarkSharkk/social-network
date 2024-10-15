import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfoContainer } from "./ProfileInfo/ProfileInfoContainer";

import styles from "./Profile.module.css"

export const Profile = ({ store }) => {
	return (
    	<div className={styles.content}>
			<ProfileInfoContainer />
			<MyPostsContainer store={store} />
		</div>
	);
};
