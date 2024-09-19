import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

import styles from "./Profile.module.css"

export const Profile = ({ posts, postText, dispatch }) => {
  return (
    <div className={styles.content}>
      <ProfileInfo 
        src="https://img.pac.ru/resorts/213095/349080/big/4E620F467F00010125C2CB432CC83B57.jpg"
        text="Content" 
      />
      <MyPosts 
        posts={posts} 
        postText={postText} 
        dispatch={dispatch}
      />
    </div>
  );
};
