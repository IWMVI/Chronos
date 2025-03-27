import styles from "./Heading.module.css";

export function Heading(props) {
  console.log(props);
  //   return <h1 className={`${styles.heading} ${styles.cyan}`}>Olá mundo!</h1>;
  return <h1 className={styles.cyan}>{props.children}</h1>;
}
