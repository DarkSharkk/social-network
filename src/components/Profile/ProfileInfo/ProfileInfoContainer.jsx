import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ProfileInfo } from "./ProfileInfo";
import { setUserProfile } from "../../../redux/profileReducer";
import loader from "./../../../bouncing-circles.svg";

class ProfileInfoSubContainer extends React.Component {
    componentDidMount() {
        const { userId = 2 } = this.props.match.params;
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(({ data }) => this.props.setUserProfile(data));
    }

    render() {
        if (!this.props.profile) {
            return <img src={loader} alt="" /> 
        }
    
        return (
            <ProfileInfo {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export const ProfileInfoContainer = connect(
    mapStateToProps, 
    { setUserProfile }
)(withRouter(ProfileInfoSubContainer));
