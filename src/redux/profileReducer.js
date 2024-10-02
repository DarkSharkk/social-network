const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState = {
    posts: [
        {userName: "Jack Harlow", location: "London"},
        {userName: "Bob Brown", location: "Manchester"}
    ],
    postText: "",
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_POST_TEXT: 
            return {
                ...state,
                postText: action.newPostText,
            };
        case ADD_POST: 
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { userName: state.postText, location: "Liverpool" }
                ],
                postText: "",
            };
        default:
            return state;
        }
};

export const postTextChangeAC = (newPostText) => ({
    type: UPDATE_POST_TEXT, newPostText 
});

export const addPostAC = () => ({ type: ADD_POST });
