import styles from '../styles/Tab.module.css';
import CircleBadge from './CircleBadge';

import clsx from 'clsx';

export default function Tab({ title, number, selected, onClick }) {
  return (
    <li className={styles.list}>
      <button onClick={onClick} className={clsx(styles.tab, { [styles.selected]: selected })}>
        <span>{title}</span>
        {number && <CircleBadge>{number}</CircleBadge>}
      </button>
    </li>
  );
}
