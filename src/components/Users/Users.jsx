import * as axios from "axios";
import React from "react";
import avatar from "./../../avatar.png";
import styles from "./Users.module.css";

export class Users extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(({ data }) => this.props.setUsers(data.items));
    }

    render() {
        return (
            <div className={styles.users}>
                {this.props.users.map((user) => (
                    <div className={styles.userItem} key={user.id}>
                        <img src={user.photos.small ?? avatar} alt="" />
                        <div className={styles.info}>
                            <span>{user.name}</span>
                            <span>{'user.location'}</span>

                            <button onClick={() => this.props.toggleFollow(user.id)}>
                                {user.followed ? "Unfollow" : "Follow"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}