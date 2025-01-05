import { connect } from "react-redux";
import { compose } from "redux";
import { Dialogs } from "./Dialogs";
import { withAuthRedirect } from "../../hocs/withAuthRedirect";
import { addDraft } from "../../redux/dialogsReducer";

const mapStateToProps = (state) => {
    const { users, messages, drafts, draftText } = state.dialogsPage;
    const { isAuth } = state.auth;

    return { users, messages, drafts, draftText, isAuth }; 
};

const DialogsContainer = compose(
    connect(mapStateToProps, { addDraft }), 
    withAuthRedirect
)(Dialogs);

export default DialogsContainer;
