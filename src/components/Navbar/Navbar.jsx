import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.item}>Profile</div>
      <div className={styles.item}>Messages</div>
      <div className={styles.item}>Settings</div>
    </nav>
  );
};
