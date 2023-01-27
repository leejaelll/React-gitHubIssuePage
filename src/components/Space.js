import styles from '../styles/Space.module.css';

export default function Space({ children }) {
  return <div className={styles.space}>{children}</div>;
}
