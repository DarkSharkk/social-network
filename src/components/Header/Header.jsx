import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

export const Header = (props) => {
    return (
        <header className={styles.header}>
            <div>
                <img src="https://www.svgrepo.com/show/8321/networking.svg" />
            </div>

            <NavLink to="/login" className={styles.link}>
                <div className={styles.login}>
                    <span className={styles.text}>{props.isAuth ? props.login : "Login"}</span>
                    {props.isAuth ? <button onClick={props.logout}>Log out</button> : null}
                </div>
            </NavLink>
        </header>
    );
};
