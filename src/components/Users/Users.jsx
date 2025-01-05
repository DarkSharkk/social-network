import React from "react";

import { User } from "./User/User";
import { Paginator } from "../common/Paginator/Paginator";

import styles from "./Users.module.css";

export const Users = ({ totalCount, pageSize, currentPage, onPageClick, users, toggleFollow, followingProcess }) => {
    return (
        <div className={styles.usersPage}>
            <Paginator totalCount={totalCount} pageSize={pageSize} pagesBlockSize={30} currentPage={currentPage} onPageClick={onPageClick} />

            <div>
                {users.map((user) => (
                    <User {...user} toggleFollow={toggleFollow} followingProcess={followingProcess} />
                ))}
            </div>
        </div>
    );
}