import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUsersAC, toggleSubscribeAC, setCurrentPageAC, setTotalCountAC } from "../../redux/usersReducer";
import { Users } from "./Users";

class UsersSubContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
                this.props.setTotalCount(data.totalCount);
            });
    }

    onPageClick = (page) => {
        this.props.setCurrentPage(page);

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(({ data }) => {
                this.props.setUsers(data.items);
            });
    };

    render() {
        return (
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                toggleFollow={this.props.toggleFollow}
                onPageClick={this.onPageClick}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { users, totalCount, pageSize, currentPage } = state.usersPage;

    return { users, totalCount, pageSize, currentPage };
};

const mapDispatchToProps = (dispatch) => ({
    toggleFollow: (userId) => dispatch(toggleSubscribeAC(userId)),
    setUsers: (newUsers) => dispatch(setUsersAC(newUsers)),
    setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersSubContainer);