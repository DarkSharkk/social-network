import { MyPosts } from "./MyPosts/MyPosts";
import styles from "./Profile.module.css"

export const Profile = () => {
  return (
    <div className={styles.content}>
      <img src="https://img.pac.ru/resorts/213095/349080/big/4E620F467F00010125C2CB432CC83B57.jpg" />
      <p>Content</p>

      <MyPosts />
    </div>
  );
};
