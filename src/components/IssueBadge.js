import clsx from 'clsx';
import styles from '../styles/IssueBadge.module.css';

export default function IssueBadge({ title, color }) {
  return <span className={clsx(styles.badge, styles[color])}>{title}</span>;
}
