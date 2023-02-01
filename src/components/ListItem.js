import styles from '../styles/ListItem.module.css';
import ListItemLayout from './ListItemLayout';

export default function ListItem({ checked, onChangeCheckBox, onClickTitle }) {
  return (
    <ListItemLayout>
      <div onClick={onClickTitle} className={styles.title} role="button">
        Issue Expample
        <div className={styles.description}># Description</div>
      </div>
    </ListItemLayout>
  );
}
