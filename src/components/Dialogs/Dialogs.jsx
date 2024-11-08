import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

import styles from "./Dialogs.module.css";

const AddMessageForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={styles.drafts}>
            <Field name="message" component="textarea" />
            <button>Save</button>
        </form>
    );
};

const AddMessageReduxForm = reduxForm({ form: 'dialogs' })(AddMessageForm);

const DialogItem = ({ id, name }) => {
    return (
        <NavLink to={`/messages/${id}`}>
        <div>{name}</div>
        </NavLink>
    );
};

export const Dialogs = ({ users, messages, drafts, addDraft }) => {
    const onAddDraft = (formData) => addDraft(formData.message);

    return (
    <div className={styles.container}>
        <div>
            <h2>Messages</h2>
            <div className={styles.dialogs}>
            <div>
                {users.map((user) => (
                    <DialogItem key={user.id} id={user.id} name={user.name} />
                ))}
            </div>
            <div>
                {messages.map((message) => (
                    <div key={message.id} id={message.id}>{message.text}</div>
                ))}
            </div>
            </div>
        </div>

        <div>
            <h3>Drafts</h3>
            <div>
                {drafts.map((draft) => (
                    <div key={draft}>{draft}</div>
                ))}
            </div>

            <AddMessageReduxForm onSubmit={onAddDraft} />
        </div>
    </div>
  );
};
