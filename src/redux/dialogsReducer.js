const ADD_DRAFT = 'ADD-DRAFT';

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
};

export const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DRAFT:
            return {
                ...state,
                drafts: [...state.drafts, action.draftText],
            };
        default:
            return state;
    }
};

export const addDraft = (draftText) => ({ type: ADD_DRAFT, draftText });
