import { connect } from "react-redux";
import { compose } from "redux";
import { addPost } from "../../../redux/profileReducer.ts";
import { MyPosts } from "./MyPosts.tsx";
import { AppStateType } from "../../../redux/store.ts";

const mapStateToProps = (state: AppStateType) => {
    const { posts } = state.profilePage;
    
    return { posts };
};

export const MyPostsContainer = compose(
    connect(mapStateToProps, { addPost })
)(MyPosts);