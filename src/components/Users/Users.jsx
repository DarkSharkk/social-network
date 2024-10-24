import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "./../../avatar.png";

import styles from "./Users.module.css";
import { API } from "../../api";

export const Users = (props) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onToggleFollow = (id, followed) => {
        props.toggleFollowInProgress({isInProgress: true, userId: id});

        followed 
            ? API
                .unfollowUser(id)
                .then(({ data }) => {
                    if (!data.resultCode) {
                        props.toggleFollow(id);
                    }
                    props.toggleFollowInProgress({isInProgress: false, userId: id});
                })
            : API
                .followUser(id)
                .then(({ data }) => {
                    if (!data.resultCode) {
                        props.toggleFollow(id);
                    }
                    props.toggleFollowInProgress({isInProgress: false, userId: id});
                })
    };

    return (
        <div className={styles.usersPage}>
            <div className={styles.pagination}>
                {pages.map((page) => (
                    <span 
                        className={props.currentPage === page ? styles.activePage : ''} 
                        onClick={() => props.onPageClick(page)}
                        key={`page-${page}`}
                    >
                        {page}
                    </span>
                ))}
            </div>

            <div>
                {props.users.map((user) => (
                    <div className={styles.userItem} key={user.id}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small ?? avatar} alt="" />
                        </NavLink>
                        
                        <div className={styles.info}>
                            <span>{user.name}</span>
                            <span>{'user.location'}</span>

                            <button 
                                onClick={() => onToggleFollow(user.id, user.followed)} 
                                disabled={props.followingProcess.isInProgress && props.followingProcess.userId === user.id}
                            >
                                {user.followed ? "Unfollow" : "Follow"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}