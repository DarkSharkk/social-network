const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const profileReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_POST_TEXT:
            state.postText = action.newPostText;

            return state;
        case ADD_POST:
            state.posts.push({ 
                userName: state.postText, 
                location: "Liverpool" 
            });
            state.postText = "";

            return state;
        default:
            return state;
        }
};

export const postTextChangeAC = (newPostText) => ({
    type: UPDATE_POST_TEXT, newPostText 
});

export const addPostAC = () => ({ type: ADD_POST });
