const ADD_DRAFT = 'ADD-DRAFT';
const UPDATE_DRAFT_TEXT = 'UPDATE-DRAFT-TEXT';

export const dialogsReducer = (state, action) => {
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
