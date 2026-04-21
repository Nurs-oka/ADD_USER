import styles from "./Button.module.css";

function Btn({ children, ...rest }) {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
}

export default Btn;
