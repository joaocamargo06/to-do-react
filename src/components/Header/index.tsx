import styles from "./Header.module.css";
import logo from "../../assets/Logo.png";

export function Header() {
  return (
    <header className={styles.headerBackground}>
      <img src={logo} />
    </header>
  );
}
