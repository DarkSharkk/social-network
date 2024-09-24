const ADD_DRAFT = 'ADD-DRAFT';
const UPDATE_DRAFT_TEXT = 'UPDATE-DRAFT-TEXT';

const initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_DRAFT_TEXT:
            state.draftText = action.newDraftText;
        
            return state;
        case ADD_DRAFT:
            state.drafts.push(state.draftText);
            state.draftText = "";

            return state;
        default:
            return state;
    }
};

export const draftTextChangeAC = (newDraftText) => ({
    type: UPDATE_DRAFT_TEXT, newDraftText
});

export const addDraftAC = () => ({ type: ADD_DRAFT });
