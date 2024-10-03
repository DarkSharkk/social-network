import * as axios from "axios";
import avatar from "./../../avatar.png";
import styles from "./Users.module.css";

export const Users = ({ users, setUsers, toggleFollow }) => {
    if (!users.length) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(({ data }) => setUsers(data.items))
    }
    return (
        <div className={styles.users}>
            {users.map((user) => (
                <div className={styles.userItem} key={user.id}>
                    <img src={user.photos.small ?? avatar} alt="" />
                    <div className={styles.info}>
                        <span>{user.name}</span>
                        <span>{'user.location'}</span>

                        <button onClick={() => toggleFollow(user.id)}>
                            {user.followed ? "Unfollow" : "Follow"}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};