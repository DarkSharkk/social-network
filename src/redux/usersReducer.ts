import { API } from "../api";

const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOW_IN_PROGRESS = 'FOLLOW_IN_PROGRESS';

type ActionType = 
    | typeof TOGGLE_SUBSCRIBE 
    | typeof SET_USERS
    | typeof SET_TOTAL_COUNT
    | typeof SET_CURRENT_PAGE
    | typeof TOGGLE_IS_FETCHING
    | typeof TOGGLE_FOLLOW_IN_PROGRESS;
    
type State = {
    users: Array<{ id: number, followed: boolean }>,
    totalCount: number,
    pageSize: number,
    currentPage: number,
    isFetching: boolean,
    followingProcess: { isInProgress: boolean, userId: number | null },
};

type Action = { 
    type: ActionType,
    userId: number,
    users: State['users'],
    totalCount: State['totalCount'],
    pageSize: State['pageSize'],
    currentPage: State['currentPage'],
    isFetching: State['isFetching'],
    followingProcess: State['followingProcess'],
};

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

export const toggleSubscribe = (id: number) => ({
    type: TOGGLE_SUBSCRIBE, userId: id
});

export const setUsers = (users: State['users']) => ({
    type: SET_USERS, users
});

export const setTotalCount = (totalCount: State['totalCount']) => ({
    type: SET_TOTAL_COUNT, totalCount
});

export const setCurrentPage = (currentPage: State['currentPage']) => ({
    type: SET_CURRENT_PAGE, currentPage
});

export const toggleIsFetching = (isFetching: State['isFetching']) => ({
    type: TOGGLE_IS_FETCHING, isFetching
});

export const toggleFollowInProgress = ({ isInProgress, userId }: { isInProgress: boolean, userId: number }) => ({
    type: TOGGLE_FOLLOW_IN_PROGRESS, followingProcess: { isInProgress, userId }
});

export const getUsers = (currentPage: State['currentPage'], pageSize: State['pageSize']) => {
    return async (dispatch) => {
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
    return async (dispatch) => {
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