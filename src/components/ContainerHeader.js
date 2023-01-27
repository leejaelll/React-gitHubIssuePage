import styles from '../styles/ContainerHeader.module.css';
import Space from './Space';
import Button from './Button';
import CircleBadge from './CircleBadge';

import TabList from './TabList';

export default function ContainerHeader({ numberProps }) {
  return (
    <div className={styles.containerHeader}>
      <Space>
        <Button style={{ backgroundColor: 'transparent', color: 'black', fontSize: '12px' }}>Pin</Button>
        <Button style={{ backgroundColor: 'transparent', color: 'black', fontSize: '12px' }}>
          Watch <CircleBadge>{numberProps}</CircleBadge>
        </Button>
        <Button style={{ backgroundColor: 'transparent', color: 'black', fontSize: '12px' }}>
          Fork <CircleBadge>{numberProps}</CircleBadge>
        </Button>
        <Button style={{ backgroundColor: 'transparent', color: 'black', fontSize: '12px' }}>
          Star <CircleBadge>{numberProps}</CircleBadge>
        </Button>
      </Space>
      <TabList />
    </div>
  );
}
