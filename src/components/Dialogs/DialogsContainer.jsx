import { addDraftAC, draftTextChangeAC } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = (props) => {
    const { users, messages, drafts, draftText } = props.store.getState().dialogsPage;

    const draftTextChangeHandler = (text) => props.store.dispatch(draftTextChangeAC(text));
    
    const addDraftHandler = () => props.store.dispatch(addDraftAC());

    return (
        <Dialogs 
            users={users} 
            messages={messages} 
            drafts={drafts} 
            draftText={draftText} 
            draftTextChangeHandler={draftTextChangeHandler}
            addDraftHandler={addDraftHandler}
        />
    );
};