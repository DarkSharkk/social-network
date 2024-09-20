const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let store = {
    _state: {
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
        posts: [
            {userName: "Jack Harlow", location: "London"},
            {userName: "Bob Brown", location: "Manchester"}
        ],
        postText: "",
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
        switch(action.type) {
            case 'UPDATE-POST-TEXT':
                this._state.postText = action.newPostText;

                this._callSubscriber(this._state);

                break;
            case 'ADD-POST':
                this._state.posts.push({ 
                    userName: this._state.postText, 
                    location: "Liverpool" 
                });
                this._state.postText = "";
        
                this._callSubscriber(this._state);

                break;
            default:
                return;
        }
    }
};

export const postTextChangeAC = (newPostText) => ({
    type: UPDATE_POST_TEXT, newPostText 
});

export const addPostAC = () => ({ type: ADD_POST });

export default store;