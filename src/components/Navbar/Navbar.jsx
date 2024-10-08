import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink to="/profile" activeClassName={styles.active}>
                    Profile
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/messages" activeClassName={styles.active}>
                    Messages
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active}>
                    Users
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/settings" activeClassName={styles.active}>
                    Settings
                </NavLink>
            </div>
        </nav>
  );
};
