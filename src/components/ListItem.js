import styles from '../styles/ListItem.module.css';
import ListItemLayout from './ListItemLayout';
import IssueBadge from './IssueBadge';

export default function ListItem({ checked, onChangeCheckBox, onClickTitle, IssueBadges }) {
  return (
    <ListItemLayout>
      <div onClick={onClickTitle} className={styles.title} role="button">
        Issue Expample
        {/* IssueBadges가 있을때만 IssueBadges를 그릴 수 있도록 만든다 */}
        {IssueBadges && IssueBadges.map((badgeProps, idx) => <IssueBadge key={idx} {...badgeProps} />)}
        <div className={styles.description}># Description</div>
      </div>
    </ListItemLayout>
  );
}
