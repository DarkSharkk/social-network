import { API } from "../api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {userName: "Jack Harlow", location: "London"},
        {userName: "Bob Brown", location: "Manchester"}
    ],
    postText: "",
    profile: null,
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
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...action.profile}
            };
        default:
            return state;
        }
};

export const postTextChange = (newPostText) => ({
    type: UPDATE_POST_TEXT, newPostText 
});

export const addPost = () => ({ type: ADD_POST });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const getProfile = (userId) => {
    return (dispatch) => {
        API.getProfile(userId).then((data) => dispatch(setUserProfile(data)));
    };
}