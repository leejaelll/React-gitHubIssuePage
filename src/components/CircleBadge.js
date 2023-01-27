import styles from '../styles/CircleBadge.module.css';

export default function CircleBadge({ children }) {
  return <div className={styles.circleBadge}>{children}</div>;
}
