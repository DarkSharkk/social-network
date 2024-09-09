import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";

const DialogItem = ({ id, name }) => {
  return (
    <NavLink to={`/messages/${id}`}>
      <div>{name}</div>
    </NavLink>
  );
};

export const Dialogs = ({ users, messages }) => {
  return (
    <>
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
    </>
  );
};
