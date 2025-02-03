import { stopSubmit } from "redux-form";
import { API } from "../api";
import { Dispatch } from "redux";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

type AddPostType = { type: typeof ADD_POST, postText: string };
type DeletePostType = { type: typeof DELETE_POST, userName: string };
type SetUserProfileType = { type: typeof SET_USER_PROFILE, profile: State['profile'] };
type SetUserStatusType = { type: typeof SET_USER_STATUS, status: State['status'] };
type SetUserPhotoType = { type: typeof SET_USER_PHOTO, photo: any }

type Action = AddPostType | DeletePostType | SetUserProfileType | SetUserStatusType | SetUserPhotoType;

type State = {
    posts: Array<{ userName: string, location: string }>
    profile: any,
    status: string,
};

const initialState: State = {
    posts: [
        {userName: "Jack Harlow", location: "London"},
        {userName: "Bob Brown", location: "Manchester"}
    ],
    profile: null,
    status: '',
};

export const profileReducer = (state = initialState, action: Action) => {
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

export const addPost = (postText: string): AddPostType => ({ type: ADD_POST, postText });

export const deletePost = (userName: string): DeletePostType => ({ type: DELETE_POST, userName });

const setUserProfile = (profile: any): SetUserProfileType => ({ type: SET_USER_PROFILE, profile });

const setUserStatus = (status: string): SetUserStatusType => ({ type: SET_USER_STATUS, status });

const setUserPhoto = (photo: any): SetUserPhotoType => ({ type: SET_USER_PHOTO, photo })

export const getProfile = (userId: number) => {
    return async (dispatch: Dispatch<Action>) => {
        const data = await API.getProfile(userId)
        dispatch(setUserProfile(data));
    };
};

export const getProfileStatus = (userId: number) => {
    return async (dispatch: Dispatch<Action>) => {
        const data = await API.getProfileStatus(userId)
        dispatch(setUserStatus(data));
    }
};

export const updateProfileStatus = (userStatus: string) => {
    return async (dispatch: Dispatch<Action>) => {
        const data = API.updateProfileStatus(userStatus);
        
        if (!data.resultCode) {
          dispatch(setUserStatus(userStatus));
        }
    }
};

export const updateProfilePhoto = (userPhoto: any) => {
    return async (dispatch: Dispatch<Action>) => {
        const { resultCode, data } = await API.updateProfilePhoto(userPhoto);

        if (!resultCode) {
            dispatch(setUserPhoto(data.photos))
        }
    }
}

export const updateProfileInfo = (userInfo: string, userId: number) => {
    return async (dispatch: Dispatch<Action>) => {
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
