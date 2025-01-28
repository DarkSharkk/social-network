import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { ProfileInfo } from "./ProfileInfo";
import { getProfile, getProfileStatus, updateProfileStatus, updateProfilePhoto, updateProfileInfo } from "../../../redux/profileReducer.ts";
import loader from "./../../../bouncing-circles.svg";

class ProfileInfoSubContainer extends React.Component {
    componentDidMount() {
        let { userId } = this.props.match.params;

        if (!userId) {
            userId = this.props.authorizedUserId;

            if (!userId) {
                this.props.history.push('/login');
                return;
            }
        }

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
                updatePhoto={this.props.updateProfilePhoto}
                updateInfo={this.props.updateProfileInfo}
                isOwner={!this.props.match.params.userId}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
});

export const ProfileInfoContainer = compose(
    connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus, updateProfilePhoto, updateProfileInfo }),
    withRouter
)(ProfileInfoSubContainer);
