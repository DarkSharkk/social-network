import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { setUserData } from "../../redux/authReducer";
import { API } from "../../api";

class HeaderSubContainer extends React.Component {
    componentDidMount() {
        API.authMe().then((data) => this.props.setUserData(data.data))
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export const HeaderContainer = connect(mapStateToProps, { setUserData })(HeaderSubContainer)