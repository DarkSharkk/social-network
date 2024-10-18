const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: true
            }
        default: {
            return state;
        }
    }
}

export const setUserData = (data) => ({ type: SET_USER_DATA, ...data });