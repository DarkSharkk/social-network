import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import React from "react";

const DialogItem = ({ id, name }) => {
  return (
    <NavLink to={`/messages/${id}`}>
      <div>{name}</div>
    </NavLink>
  );
};

export const Dialogs = ({ users, messages, drafts, draftText, draftTextChangeHandler, addDraftHandler }) => {
  const textRef = React.createRef();

  const onDraftTextChahnge = () => draftTextChangeHandler(textRef.current.value);

  const onAddDraft = () => addDraftHandler();

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

          <div className={styles.drafts}>
            <textarea name="draftText" id="draftText" value={draftText} ref={textRef} onChange={onDraftTextChahnge} />
            <button onClick={onAddDraft}>Save</button>
          </div>
        </div>
    </div>
  );
};
