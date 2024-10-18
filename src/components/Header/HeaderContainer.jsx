import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import { setUserData } from "../../redux/authReducer";

class HeaderSubContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
            .then(({ data }) => this.props.setUserData(data.data))
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