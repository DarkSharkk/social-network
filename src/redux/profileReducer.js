import { API } from "../api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
    posts: [
        {userName: "Jack Harlow", location: "London"},
        {userName: "Bob Brown", location: "Manchester"}
    ],
    postText: "",
    profile: null,
    status: '',
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
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
        }
};

export const postTextChange = (newPostText) => ({
    type: UPDATE_POST_TEXT, newPostText 
});

export const addPost = () => ({ type: ADD_POST });

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

export const getProfile = (userId) => {
    return (dispatch) => {
        API.getProfile(userId).then((data) => dispatch(setUserProfile(data)));
    };
};

export const getProfileStatus = (userId) => {
    return (dispatch) => {
        API.getProfileStatus(userId).then((data) => dispatch(setUserStatus(data)));
    }
};

export const updateProfileStatus = (userStatus) => {
    return (dispatch) => {
        API.updateProfileStatus(userStatus).then((data) => {
            if (!data.resultCode) {
                dispatch(setUserStatus(userStatus));
            }
        });
    }
};
