import { connect } from "react-redux";
import { addDraftAC, draftTextChangeAC } from "../../redux/dialogsReducer";
import { Dialogs } from "./Dialogs";

const mapStateToProps = (state) => {
    const { users, messages, drafts, draftText } = state.dialogsPage;

    return { users, messages, drafts, draftText }; 
};

const mapDispatchToProps = (dispatch) => ({
    draftTextChangeHandler: (text) => dispatch(draftTextChangeAC(text)),
    addDraftHandler: () => dispatch(addDraftAC()),
});

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);