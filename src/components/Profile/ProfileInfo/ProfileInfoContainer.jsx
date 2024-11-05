import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { ProfileInfo } from "./ProfileInfo";
import { getProfile, getProfileStatus, updateProfileStatus } from "../../../redux/profileReducer";
import loader from "./../../../bouncing-circles.svg";

class ProfileInfoSubContainer extends React.Component {
    componentDidMount() {
        const { userId = 2 } = this.props.match.params;
        this.props.getProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        if (!this.props.profile) {
            return <img src={loader} alt="" /> 
        }

        return (
            <ProfileInfo 
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateProfileStatus}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export const ProfileInfoContainer = compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus }),
    withRouter
)(ProfileInfoSubContainer);
