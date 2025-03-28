import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLink} title="Home">
        <HouseIcon />
      </a>
      <a href="#" className={styles.menuLink} title="History">
        <HistoryIcon />
      </a>
      <a href="#" className={styles.menuLink} title="Settings">
        <SettingsIcon />
      </a>
      <a href="#" className={styles.menuLink} title="Sun">
        <SunIcon />
      </a>
    </nav>
  );
}
