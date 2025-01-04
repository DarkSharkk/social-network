import { addPost, deletePost, profileReducer } from "./profileReducer";

const POSTS = {
    posts: [
        {userName: "Jack Harlow", location: "London"},
        {userName: "Bob Brown", location: "Manchester"}
    ]
};

it('posts length should be incremented', () => {
    const action = addPost("Bobby Charlton");

    const newState = profileReducer(POSTS, action);
    
    expect(newState.posts.length).toBe(3);
});

it('posts length should be decremented', () => {
    const action = deletePost("Bob Brown");

    const newState = profileReducer(POSTS, action);

    expect(newState.posts.length).toBe(1);
});