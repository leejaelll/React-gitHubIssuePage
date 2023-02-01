import clsx from 'clsx';
import styles from '../styles/ListItemLayout.module.css';

export default function ListItemLayout({ children, className }) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      {/* <input type="checkbox" className={styles.checkbox} value={checked} onChange={onChangeCheckBox} /> */}
      <input type="checkbox" className={styles.checkbox} />
      {children}
    </div>
  );
}
