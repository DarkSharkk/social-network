import { stopSubmit } from "redux-form";
import { API } from "../api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
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
                isAuth: !!action.login
            }
        default: {
            return state;
        }
    }
}

const setUserData = (data) => ({ type: SET_USER_DATA, ...data });

export const authMe = () => {
    return async (dispatch) => {
        const data = await API.authMe();
        dispatch(setUserData(data.data));
    }
}

export const login = ({ email, password, rememberMe }) => {
    return async (dispatch) => {
        debugger;
        const { resultCode, messages } = await API.login({ email, password, rememberMe });

        if (!resultCode) {
            dispatch(authMe());
        } else {
            const errorMessage = messages.length
                ? messages[0]
                : "Something went wrong.";

            dispatch(stopSubmit("login", { _error: errorMessage }));
        }
        
    }
};

export const logout = () => {
    return async (dispatch) => {
        const { resultCode } = await API.logout()
        
        if (!resultCode) {
            dispatch(setUserData({ login: null, id: null, email: null }));
        }
    }
}