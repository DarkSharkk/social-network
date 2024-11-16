import { combineReducers, createStore, applyMiddleware } from "redux";
import { appReducer } from "./appReducer";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { usersReducer } from "./usersReducer";
import { reducer as formReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;