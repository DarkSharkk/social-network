import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "./../../../avatar.png";

import styles from './User.module.css';

type Props = {
    id: number,
    photos: {
        small: string,
    },
    name: string,
    followed: boolean,
    toggleFollow: (id: number, followed: boolean) => void,
    followingProcess: {
        userId: number,
        isInProgress: boolean,
    },
};

export const User: React.FC<Props> = ({ id, photos, name, followed, toggleFollow, followingProcess }) => {
    return (
        <div className={styles.userItem} key={id}>
            <NavLink to={`/profile/${id}`}>
                <img src={photos.small ?? avatar} alt="" />
            </NavLink>

            <div className={styles.info}>
                <span>{name}</span>
                <span>{"user.location"}</span>

                <button
                    onClick={() => toggleFollow(id, followed)}
                    disabled={
                        followingProcess.isInProgress &&
                        followingProcess.userId === id
                    }
                >
                    {followed ? "Unfollow" : "Follow"}
                </button>
            </div>
        </div>
    );
};
