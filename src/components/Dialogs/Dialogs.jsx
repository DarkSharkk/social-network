import { NavLink } from "react-router-dom";
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
          <DialogItem id={1} name="User 1" />
          <DialogItem id={2} name="User 2" />
          <DialogItem id={3} name="User 3" />
        </div>
        <div>
          <div>Message 1</div>
          <div>Message 2</div>
          <div>Message 3</div>
        </div>
      </div>
    </>
  );
};
