import { connect } from "react-redux";
import { addPost, postTextChange } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

const mapStateToProps = (state) => {
    const { posts, postText } = state.profilePage;
    
    return { posts, postText };
};

export const MyPostsContainer = connect(mapStateToProps, { postTextChange, addPost })(MyPosts);