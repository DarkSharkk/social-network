import { connect } from "react-redux";
import { addPostAC, postTextChangeAC } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

const mapStateToProps = (state) => {
    const { posts, postText } = state.profilePage;
    
    return { posts, postText };
};

const mapDispatchToProps = (dispatch) => ({
    postTextChangeHandler: (text) => dispatch(postTextChangeAC(text)),
    addPostHandler: () => dispatch(addPostAC()),
});

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);