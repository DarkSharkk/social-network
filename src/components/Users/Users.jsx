import React from "react";
import { NavLink } from "react-router-dom";
import avatar from "./../../avatar.png";

import styles from "./Users.module.css";

export const Users = (props) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

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
                                onClick={() => props.toggleFollow(user.id, user.followed)} 
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