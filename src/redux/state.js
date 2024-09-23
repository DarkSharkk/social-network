const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_DRAFT = 'ADD-DRAFT';
const UPDATE_DRAFT_TEXT = 'UPDATE-DRAFT-TEXT';

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
        drafts: [],
        draftText: "",
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
            case UPDATE_POST_TEXT:
                this._state.postText = action.newPostText;

                this._callSubscriber(this._state);

                break;
            case ADD_POST:
                this._state.posts.push({ 
                    userName: this._state.postText, 
                    location: "Liverpool" 
                });
                this._state.postText = "";
        
                this._callSubscriber(this._state);

                break;
            case UPDATE_DRAFT_TEXT:
                this._state.draftText = action.newDraftText;

                this._callSubscriber(this._state);
            
                break;
            case ADD_DRAFT:
                this._state.drafts.push(this._state.draftText);
                this._state.draftText = "";

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

export const draftTextChangeAC = (newDraftText) => ({
    type: UPDATE_DRAFT_TEXT, newDraftText
});

export const addDraftAC = () => ({ type: ADD_DRAFT });

export default store;