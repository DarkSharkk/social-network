import { connect } from "react-redux";
import { Users } from "./Users";
import { setUsersAC, toggleSubscribeAC, setCurrentPageAC, setTotalCountAC } from "../../redux/usersReducer";

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);