import styles from '../styles/Tab.module.css';
import CircleBadge from './CircleBadge';

import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Tab({ title, number, selected, onClick, iconProp }) {
  return (
    <li className={styles.list}>
      <button onClick={onClick} className={clsx(styles.tab, { [styles.selected]: selected })}>
        <FontAwesomeIcon icon={iconProp} />
        <span className={styles.title}>{title}</span>
        {number && <CircleBadge>{number}</CircleBadge>}
      </button>
    </li>
  );
}
