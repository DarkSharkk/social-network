import React from "react";

import styles from "./Users.module.css";
import { User } from "./User/User";

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
                    <User {...user} toggleFollow={props.toggleFollow} followingProcess={props.followingProcess} />
                ))}
            </div>
        </div>
    );
}