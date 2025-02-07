import React from "react";
import { connect } from "react-redux";
import { getUsers, toggleFollow } from "../../redux/usersReducer.ts";
import { Users } from "./Users.tsx";
import loader from "./../../bouncing-circles.svg";
import { compose } from "redux";
import { AppStateType } from "../../redux/store.ts";

type Props = {
    currentPage: number,
    pageSize: number,
    isFetching: boolean,
    totalCount: number,
    users: Array<any>,
    getUsers: (page: number, size: number) => void,
    toggleFollow: () => void,
    followingProcess: {
        userId: number,
        isInProgress: boolean,
    },
};

class UsersSubContainer extends React.Component<Props> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageClick = (page: number) => {
        this.props.getUsers(page, this.props.pageSize)
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
                        onPageClick={this.onPageClick}
                    />
                )
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    const { users, totalCount, pageSize, currentPage, isFetching, followingProcess } = state.usersPage;

    return { users, totalCount, pageSize, currentPage, isFetching, followingProcess };
};

export const UsersContainer = compose(
    connect(mapStateToProps, { getUsers, toggleFollow })
)(UsersSubContainer);