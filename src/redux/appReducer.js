import { authMe } from "./authReducer";

const INITIALIZE = 'INITIALIZE';

const initialState = {
    isInitialize: false,
}

export const appReducer = (state = initialState, action) => {
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