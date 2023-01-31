import { useState, useEffect } from 'react';
import styles from '../styles/ListContainer.module.css';
import Button from './Button';

export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');

  useEffect(() => {
    console.log({ inputValue });
  }, [inputValue]);

  return (
    <div className={styles.listContainer}>
      <div className={styles.searchBar}>
        <div className={styles.filterInputBar}>
          <details className={styles.details}>
            <summary>Filters</summary>
            <div className={styles.filterModal}>
              <h3>Filter Issues</h3>
              <a href="www.naver.com">Open issues and pull request</a>
              <a href="www.naver.com">Your issues</a>
              <a href="www.naver.com">Your pull request</a>
            </div>
          </details>
          <input className={styles.input} value={inputValue} onChange={e => setInputValue(e.target.value)} />
        </div>
        <Button style={{ fontSize: '14px', backgroundColor: 'green', color: 'white' }}>New Issue</Button>
      </div>
    </div>
  );
}
