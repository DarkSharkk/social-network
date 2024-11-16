import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Header } from "./Header";
import { logout } from "../../redux/authReducer";

class HeaderSubContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export const HeaderContainer = compose(
    connect(mapStateToProps, { logout })
)(HeaderSubContainer);;