import { Dispatch } from "redux";
import { authMe } from "./authReducer.ts";

const INITIALIZE = 'INITIALIZE';

type InitializeSuccessType = { type: typeof INITIALIZE };

type Action = InitializeSuccessType;

type State = {
    isInitialize: boolean;
};

const initialState: State = {
    isInitialize: false,
}

export const appReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case INITIALIZE:
            return {
                ...state,
                isInitialize: true,
            }
        default: {
            return state;
        }
    }
};

const initializeSuccess = (): InitializeSuccessType => ({ type: INITIALIZE });

export const initializeApp = () => async (dispatch: Dispatch<InitializeSuccessType>) => {
    await dispatch(authMe())
    dispatch(initializeSuccess());
};