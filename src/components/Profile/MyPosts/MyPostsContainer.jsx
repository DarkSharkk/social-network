import { connect } from "react-redux";
import { compose } from "redux";
import { addPost, postTextChange } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

const mapStateToProps = (state) => {
    const { posts, postText } = state.profilePage;
    
    return { posts, postText };
};

export const MyPostsContainer = compose(
    connect(mapStateToProps, { postTextChange, addPost })
)(MyPosts);