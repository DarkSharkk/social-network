import { connect } from "react-redux";
import { addDraft, draftTextChange } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => {
    const { users, messages, drafts, draftText } = state.dialogsPage;
    const { isAuth } = state.auth;

    return { users, messages, drafts, draftText, isAuth }; 
};

export const DialogsContainer = connect(mapStateToProps, { addDraft, draftTextChange })(Dialogs);