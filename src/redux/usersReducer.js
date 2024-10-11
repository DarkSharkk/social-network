const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    totalCount: 0,
    pageSize: 10,
    currentPage: 1,
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
        default: 
            return state;
    }
};

export const toggleSubscribeAC = (id) => ({
    type: TOGGLE_SUBSCRIBE, userId: id
});

export const setUsersAC = (users) => ({
    type: SET_USERS, users
});

export const setTotalCountAC = (totalCount) => ({
    type: SET_TOTAL_COUNT, totalCount
});

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE, currentPage
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, isFetching
});