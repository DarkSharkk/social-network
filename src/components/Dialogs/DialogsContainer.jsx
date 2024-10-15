import { connect } from "react-redux";
import { addDraft, draftTextChange } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => {
    const { users, messages, drafts, draftText } = state.dialogsPage;

    return { users, messages, drafts, draftText }; 
};

export const DialogsContainer = connect(mapStateToProps, { addDraft, draftTextChange })(Dialogs);