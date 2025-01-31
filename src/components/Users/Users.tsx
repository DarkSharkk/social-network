import React from "react";

import { User } from "./User/User.tsx";
import { Paginator } from "../common/Paginator/Paginator.tsx";

import styles from "./Users.module.css";

type Props = {
    totalCount: number,
    pageSize: number,
    currentPage: number,
    onPageClick: (page: number) => void,
    users: Array<any>,
    toggleFollow: () => void,
    followingProcess: {
        userId: number,
        isInProgress: boolean,
    },
};

export const Users: React.FC<Props> = ({ totalCount, pageSize, currentPage, onPageClick, users, toggleFollow, followingProcess }) => {
    return (
        <div className={styles.usersPage}>
            <Paginator totalCount={totalCount} pageSize={pageSize} pagesBlockSize={30} currentPage={currentPage} onPageClick={onPageClick} />

            <div>
                {users.map((user) => (
                    <User key={user.id} {...user} toggleFollow={toggleFollow} followingProcess={followingProcess} />
                ))}
            </div>
        </div>
    );
}