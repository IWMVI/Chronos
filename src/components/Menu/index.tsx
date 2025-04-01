import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange() {
    event?.preventDefault();
    console.log("Clicado", Date.now());

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
    // document.documentElement.setAttribute("data-theme", theme);
  }

  useEffect(() => {
    console.log(Date.now());
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        href="#"
        className={styles.menuLink}
        title="Ir para home"
        aria-label="Ir para a home"
      >
        <HouseIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        title="Ver histórico"
        aria-label="Ver histórico"
      >
        <HistoryIcon />
      </a>
      <a
        href="#"
        className={styles.menuLink}
        title="Ir para configurações"
        aria-label="Ir para configurações"
      >
        <SettingsIcon />
      </a>
      <a
        href="www.google.com"
        className={styles.menuLink}
        title="Alterar tema"
        aria-label="Alterar tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
