import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange() {
    event?.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  /* Usado toda vez que o componente renderiza na tela.

     useEffect(() => {
       console.log("", Date.now());
     });

  */

  /* Executa apenas quando o React monta o componente na tela pela 1ª vez

     useEffect(() => {
       console.log("", Date.now());
     },[]);

  */

  // Executa apenas quando o valor de "theme" muda.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    return () => {}; // Para retirar possíveis "sujeiras" -> Função de "Cleanup"
  }, [theme]);

  return (
    <nav className={styles.menu}>
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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
