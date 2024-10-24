import React from "react";
import { connect } from "react-redux";
import { setUsers, toggleFollow, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowInProgress } from "../../redux/usersReducer";
import { Users } from "./Users";
import loader from "./../../bouncing-circles.svg";
import { API } from "../../api";

class UsersSubContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        API
            .getUsers(this.props.currentPage, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);

                this.props.toggleIsFetching(false);
            });
    }

    onPageClick = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);

        API
            .getUsers(page, this.props.pageSize)
            .then((data) => {
                this.props.setUsers(data.items);

                this.props.toggleIsFetching(false);
            });
    };

    render() {
        return (
            this.props.isFetching 
                ? <img src={loader} alt="" /> 
                : (
                    <Users
                        users={this.props.users}
                        totalCount={this.props.totalCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        toggleFollow={this.props.toggleFollow}
                        followingProcess={this.props.followingProcess}
                        toggleFollowInProgress={this.props.toggleFollowInProgress}
                        onPageClick={this.onPageClick}
                    />
                )
        );
    }
}

const mapStateToProps = (state) => {
    const { users, totalCount, pageSize, currentPage, isFetching, followingProcess } = state.usersPage;

    return { users, totalCount, pageSize, currentPage, isFetching, followingProcess };
};

export const UsersContainer = connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setTotalCount,
    setCurrentPage,
    toggleIsFetching,
    toggleFollowInProgress,
})(UsersSubContainer);