import { combineReducers, createStore, applyMiddleware } from "redux";
import { appReducer } from "./appReducer.ts";
import { authReducer } from "./authReducer.ts";
import { profileReducer } from "./profileReducer.ts";
import { dialogsReducer } from "./dialogsReducer.ts";
import { usersReducer } from "./usersReducer.ts";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

type ReducerType = typeof rootReducer;
export type AppStateType = ReturnType<ReducerType>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;