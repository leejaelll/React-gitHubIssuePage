import { useState } from 'react';
import styles from '../styles/TabList.module.css';
import Tab from './Tab';

const tabs = ['Code', 'Issues', 'Pull Request', 'Actions', 'Projects', 'Security', 'Insights'];

export default function TabList() {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  return (
    <ul className={styles.tabList}>
      {tabs.map((tab, idx) => (
        <Tab key={`${idx}`} title={tab} selected={selectedTabIdx === idx} onClick={() => setSelectedTabIdx(idx)} />
      ))}
    </ul>
  );
}
