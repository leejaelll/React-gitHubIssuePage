import styles from '../styles/ListContainer.module.css';
import Button from './Button';

export default function ListContainer() {
  return (
    <div className={styles.listContainer}>
      <Button style={{ fontSize: '14px', backgroundColor: 'green', color: 'white' }}>New Issue</Button>
    </div>
  );
}
