import { connect } from "react-redux";
import { compose } from "redux";
import { addPost } from "../../../redux/profileReducer.ts";
import { MyPosts } from "./MyPosts";

const mapStateToProps = (state) => {
    const { posts } = state.profilePage;
    
    return { posts };
};

export const MyPostsContainer = compose(
    connect(mapStateToProps, { addPost })
)(MyPosts);