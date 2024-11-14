import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Header } from "./Header";
import { authMe, logout } from "../../redux/authReducer";

class HeaderSubContainer extends React.Component {
    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export const HeaderContainer = compose(
    connect(mapStateToProps, { authMe, logout })
)(HeaderSubContainer);;