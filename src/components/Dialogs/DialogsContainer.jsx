import { connect } from "react-redux";
import { Dialogs } from "./Dialogs";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import { addDraft, draftTextChange } from "../../redux/dialogsReducer";

const mapStateToProps = (state) => {
    const { users, messages, drafts, draftText } = state.dialogsPage;
    const { isAuth } = state.auth;

    return { users, messages, drafts, draftText, isAuth }; 
};

export const DialogsContainer = connect(mapStateToProps, { addDraft, draftTextChange })(withAuthRedirect(Dialogs));