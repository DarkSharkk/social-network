import { connect } from "react-redux";
import { Users } from "./Users";
import { setUsersAC, toggleSubscribeAC } from "../../redux/usersReducer";

const mapStateToProps = (state) => {
    const { users } = state.usersPage;

    return { users };
};

const mapDispatchToProps = (dispatch) => ({
    toggleFollow: (userId) => {debugger; dispatch(toggleSubscribeAC(userId))},
    setUsers: (newUsers) => dispatch(setUsersAC(newUsers)),
});

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);