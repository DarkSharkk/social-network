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
    updatePostText(newPostText) {
        console.log(`-`, newPostText);
        this._state.postText = newPostText;

        this._callSubscriber(this._state);
    },
    addPost() {
        this._state.posts.push({ 
            userName: this._state.postText, 
            location: "Liverpool" 
        });
        this._state.postText = "";

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        debugger;
        this._callSubscriber = observer;
    }
};

export default store;