import { stopSubmit } from "redux-form";
import { API } from "../api";
import { Dispatch } from "redux";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_CAPTCHA = 'SET_CAPTCHA';

type SetUserDataType = { type: typeof SET_USER_DATA, login: string };
type SetCaptchaType = { type: typeof SET_CAPTCHA, url: string | null };

type Action = SetUserDataType | SetCaptchaType;

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

const setUserData = (data: any): SetUserDataType => ({ type: SET_USER_DATA, ...data });

const setCaptcha = (url: State['captchaUrl']): SetCaptchaType => ({  type: SET_CAPTCHA, url });

export const authMe = () => {
    return async (dispatch: Dispatch<SetUserDataType>) => {
        const data = await API.authMe();
        dispatch(setUserData(data.data));
    }
}

export const login = ({ email, password, rememberMe, captcha }: { email: State['email'], password: string, rememberMe: boolean, captcha: State['captchaUrl'] }) => {
    return async (dispatch: Dispatch<SetUserDataType>) => {
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
    return async (dispatch: Dispatch<SetUserDataType>) => {
        const { resultCode } = await API.logout()
        
        if (!resultCode) {
            dispatch(setUserData({ login: null, id: null, email: null }));
        }
    }
};

export const getCaptcha = () => {
    return async (dispatch: Dispatch<SetCaptchaType>) => {
        const { url } = await API.getCaptcha();
        dispatch(setCaptcha(url));
    }
};
