import { NavLink } from "react-router-dom";
import data from "./../../data/data.json";
import styles from "./Dialogs.module.css";

const DialogItem = ({ id, name }) => {
  return (
    <NavLink to={`/messages/${id}`}>
      <div>{name}</div>
    </NavLink>
  );
};

export const Dialogs = () => {
  return (
    <>
      <h2>Messages</h2>
      <div className={styles.dialogs}>
        <div>
          {data.users.map((user) => (
            <DialogItem key={user.id} id={user.id} name={user.name} />
          ))}
        </div>
        <div>
          {data.messages.map((message) => (
            <div key={message.id} id={message.id}>{message.text}</div>
          ))}
        </div>
      </div>
    </>
  );
};
