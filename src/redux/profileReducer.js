import { API } from "../api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
    posts: [
        {userName: "Jack Harlow", location: "London"},
        {userName: "Bob Brown", location: "Manchester"}
    ],
    profile: null,
    status: '',
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { userName: action.postText, location: "Liverpool" }
                ],
            };
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter(post => post.userName !== action.userName)
            }
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

export const addPost = (postText) => ({ type: ADD_POST, postText });

export const deletePost = (userName) => ({ type: DELETE_POST, userName });

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
