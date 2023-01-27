import styles from '../styles/Button.module.css';

export default function Button({ style, children }) {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  );
}
