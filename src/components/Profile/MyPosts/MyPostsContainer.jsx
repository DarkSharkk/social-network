import { addPostAC, postTextChangeAC } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = (props) => {
    const { posts, postText } = props.store.getState().profilePage;

    const postTextChangeHandler = (text) => props.store.dispatch(postTextChangeAC(text));

    const addPostHandler = () => props.store.dispatch(addPostAC());

    return (
        <MyPosts 
            posts={posts} 
            postText={postText} 
            postTextChangeHandler={postTextChangeHandler} 
            addPostHandler={addPostHandler} 
        />
    );
};