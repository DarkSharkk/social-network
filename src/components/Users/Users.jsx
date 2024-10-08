import * as axios from "axios";
import React from "react";
import avatar from "./../../avatar.png";
import styles from "./Users.module.css";

export class Users extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            });
    }

    onPageClick = (page) => {
        debugger;
        this.props.setCurrentPage(page);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
            });
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.usersPage}>
                <div className={styles.pagination}>
                    {pages.map((page) => (
                        <span 
                            className={this.props.currentPage === page ? styles.activePage : ''} 
                            onClick={() => this.onPageClick(page)}
                        >
                            {page}
                        </span>
                    ))}
                </div>

                <div>
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
            </div>
        );
    }
}