import { stopSubmit } from "redux-form";
import { API } from "../api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

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
        case SET_USER_PHOTO:
            return {
                ...state,
                profile: { ...state.profile, photos: action.photo }
            }
        default:
            return state;
        }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });

export const deletePost = (userName) => ({ type: DELETE_POST, userName });

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

const setUserStatus = (status) => ({ type: SET_USER_STATUS, status });

const setUserPhoto = (photo) => ({ type: SET_USER_PHOTO, photo })

export const getProfile = (userId) => {
    return async (dispatch) => {
        const data = await API.getProfile(userId)
        dispatch(setUserProfile(data));
    };
};

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        const data = await API.getProfileStatus(userId)
        dispatch(setUserStatus(data));
    }
};

export const updateProfileStatus = (userStatus) => {
    return async (dispatch) => {
        const data = API.updateProfileStatus(userStatus);
        
        if (!data.resultCode) {
          dispatch(setUserStatus(userStatus));
        }
    }
};

export const updateProfilePhoto = (userPhoto) => {
    return async (dispatch) => {
        const { resultCode, data } = await API.updateProfilePhoto(userPhoto);

        if (!resultCode) {
            dispatch(setUserPhoto(data.photos))
        }
    }
}

export const updateProfileInfo = (userInfo, userId) => {
    return async (dispatch) => {
        const { resultCode, messages } = await API.updateProfileInfo(userInfo);

        if (!resultCode) {
            dispatch(getProfile(userId));
        } else {
            const errorMessage = messages.length
                ? messages[0]
                : "Something went wrong.";
        
            dispatch(stopSubmit("profileInfo", { _error: errorMessage }));
        }
    }
}
