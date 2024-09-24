import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {userName: "Jack Harlow", location: "London"},
                {userName: "Bob Brown", location: "Manchester"}
            ],
            postText: "",
        },
        dialogsPage: {
            messages: [
                {id: 1, text: "Message 1"},
                {id: 2, text: "Message 2"},
                {id: 3, text: "Message 3"}
            ],
            users: [
                {id: 1, name: "User 1"},
                {id: 2, name: "User 2"},
                {id: 3, name: "User 3"}
            ],
            drafts: [],
            draftText: "",
        },
    },
    _callSubscriber() {
        console.log('State changed.');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};

export default store;