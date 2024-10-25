import { API } from "../api";

const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';

const initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingProcess: {
        isInProgress: false,
        userId: null,
    },
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SUBSCRIBE:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        }
                    }

                    return user;
                })
            };
        case SET_USERS: 
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOW_IN_PROGRESS:
            return {
                ...state,
                followingProcess: { 
                    isInProgress: action.followingProcess.isInProgress, 
                    userId: action.followingProcess.userId 
                }
            }
        default: 
            return state;
    }
};

export const toggleSubscribe = (id) => ({
    type: TOGGLE_SUBSCRIBE, userId: id
});

export const setUsers = (users) => ({
    type: SET_USERS, users
});

export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT, totalCount
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
});

export const toggleFollowInProgress = ({ isInProgress, userId }) => ({
    type: TOGGLE_FOLLOW_IN_PROGRESS, followingProcess: { isInProgress, userId }
});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        API
            .getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setCurrentPage(currentPage))
                dispatch(setUsers(data.items));
                dispatch(setTotalCount(data.totalCount));

                dispatch(toggleIsFetching(false));
            });
    }
}

export const toggleFollow = (id, followed) => {
    return (dispatch) => {
        dispatch(toggleFollowInProgress({isInProgress: true, userId: id}));

        followed 
            ? API
                .unfollowUser(id)
                .then(({ data }) => {
                    if (!data.resultCode) {
                        dispatch(toggleSubscribe(id));
                    }
                    dispatch(toggleFollowInProgress({isInProgress: false, userId: id}));
                })
            : API
                .followUser(id)
                .then(({ data }) => {
                    if (!data.resultCode) {
                        dispatch(toggleSubscribe(id));
                    }
                    dispatch(toggleFollowInProgress({isInProgress: false, userId: id}));
                })
    }
}