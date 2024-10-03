const TOGGLE_SUBSCRIBE = 'TOGGLE_SUBSCRIBE';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: []
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
                users: [...state.users, ...action.users]
            };
        default: 
            return state;
    }
};

export const toggleSubscribeAC = (id) => ({
    type: TOGGLE_SUBSCRIBE, userId: id
});

export const setUsersAC = (users) => ({
    type: SET_USERS, users: users
});