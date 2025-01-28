import { authMe } from "./authReducer.ts";

const INITIALIZE = 'INITIALIZE';

type State = {
    isInitialize: boolean;
};

type Action = {
    type: typeof INITIALIZE;
}

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

const initializeSucess = () => ({ type: INITIALIZE });

export const initializeApp = () => async (dispatch) => {
    await dispatch(authMe())
    dispatch(initializeSucess());
};