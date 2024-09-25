import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

import styles from "./Profile.module.css"

export const Profile = ({ store }) => {
	return (
    	<div className={styles.content}>
			<ProfileInfo 
				src="https://img.pac.ru/resorts/213095/349080/big/4E620F467F00010125C2CB432CC83B57.jpg"
				text="Content" 
			/>
			<MyPostsContainer store={store} />
		</div>
	);
};
