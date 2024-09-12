import { renderEntireTree } from "../render";

const state = {
    messages: [
        {id: 1, text: "Message 1"},
        {id: 2, text: "Message 2"},
        {id: 3, text: "Message 3"}
    ],
    users: [
        {id: 1, name: "User 1"},
        {id: 2, name: "User 2"},
        {id: 3, name: "User 3"}
    ],
    posts: [
        {userName: "Jack Harlow", location: "London"},
        {userName: "Bob Brown", location: "Manchester"}
    ],
    postText: "",
    updatePostText: (newPostText) => {
        state.postText = newPostText;

        renderEntireTree(state);
    },
    addPost: () => {
        state.posts.push({userName: state.postText, location: "Liverpool" });
        state.postText = "";

        renderEntireTree(state);
    }
}

export default state;