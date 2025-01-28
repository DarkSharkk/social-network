import { stopSubmit } from "redux-form";
import { API } from "../api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

type ActionType = typeof SET_USER_DATA | typeof SET_CAPTCHA;

type Action = {
    type: ActionType,
    login: State['login'],
    url: State['captchaUrl'],
};

type State = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
    captchaUrl: string | null,
};

const initialState: State = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: null,
};

export const authReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action,
                isAuth: !!action.login
            }
        case SET_CAPTCHA: {
            return {
                ...state,
                captchaUrl: action.url
            }
        }
        default: {
            return state;
        }
    }
}

const setUserData = (data: any) => ({ type: SET_USER_DATA, ...data });

const setCaptcha = (url: State['captchaUrl']) => ({  type: SET_CAPTCHA, url });

export const authMe = () => {
    return async (dispatch) => {
        const data = await API.authMe();
        dispatch(setUserData(data.data));
    }
}

export const login = ({ email, password, rememberMe, captcha }: { email: State['email'], password: string, rememberMe: boolean, captcha: State['captchaUrl'] }) => {
    return async (dispatch) => {
        const { resultCode, messages } = await API.login({ email, password, rememberMe, captcha });

        if (!resultCode) {
            dispatch(authMe());
        } else {
            if (resultCode === 10) {
                dispatch(getCaptcha());
            }

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
};

export const getCaptcha = () => {
    return async (dispatch) => {
        const { url } = await API.getCaptcha();
        dispatch(setCaptcha(url));
    }
};
