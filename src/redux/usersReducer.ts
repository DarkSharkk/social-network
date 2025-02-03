import { Dispatch } from "redux";
import { API } from "../api";

const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';
    
type State = {
    users: Array<{ id: number, followed: boolean }>,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingProcess: { isInProgress: boolean, userId: number | null },
};

type TogggleSubscribeType = { type: typeof TOGGLE_SUBSCRIBE, userId: number };
type SetUsersType = { type: typeof SET_USERS, users: State['users'] };
type SetTotalCountType = { type: typeof SET_TOTAL_COUNT, totalCount: State['totalCount'] };
type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: State['currentPage'] };
type ToggleIsFetchingType = { type: typeof TOGGLE_IS_FETCHING, isFetching: State['isFetching'] };
type ToggleFollowInProgressType = { type: typeof TOGGLE_FOLLOW_IN_PROGRESS, followingProcess: State["followingProcess"] };

type Action = TogggleSubscribeType | SetUsersType | SetTotalCountType | SetCurrentPageType 
    | SetCurrentPageType | ToggleIsFetchingType | ToggleFollowInProgressType;

const initialState: State = {
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

export const usersReducer = (state = initialState, action: Action): State => {
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

export const toggleSubscribe = (id: number): TogggleSubscribeType => ({
    type: TOGGLE_SUBSCRIBE, userId: id
});

export const setUsers = (users: State['users']): SetUsersType => ({
    type: SET_USERS, users
});

export const setTotalCount = (totalCount: State['totalCount']): SetTotalCountType => ({
    type: SET_TOTAL_COUNT, totalCount
});

export const setCurrentPage = (currentPage: State['currentPage']): SetCurrentPageType => ({
    type: SET_CURRENT_PAGE, currentPage
});

export const toggleIsFetching = (isFetching: State['isFetching']): ToggleIsFetchingType => ({
    type: TOGGLE_IS_FETCHING, isFetching
});

export const toggleFollowInProgress = ({ isInProgress, userId }: State["followingProcess"]): ToggleFollowInProgressType => ({
    type: TOGGLE_FOLLOW_IN_PROGRESS, followingProcess: { isInProgress, userId }
});

export const getUsers = (currentPage: State['currentPage'], pageSize: State['pageSize']) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(toggleIsFetching(true));

        const data = await API.getUsers(currentPage, pageSize);
        
        if (data) {
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        }

        dispatch(toggleIsFetching(false));
    }
}

export const toggleFollow = (id: number, followed: boolean) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch(toggleFollowInProgress({isInProgress: true, userId: id}));

        if (followed) {
            const { data } = await API.unfollowUser(id)

            if (!data.resultCode) {
                dispatch(toggleSubscribe(id));
            }

            dispatch(toggleFollowInProgress({isInProgress: false, userId: id}));
        } else {
            const { data } = await API.followUser(id);
            
            if (!data.resultCode) {
                dispatch(toggleSubscribe(id));
            }

            dispatch(toggleFollowInProgress({isInProgress: false, userId: id}));
        }
    }
}