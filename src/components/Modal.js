import clsx from 'clsx';
import { useEffect, useState } from 'react';
import styles from '../styles/Modal.module.css';

export default function Modal({ opened, title, onClose, placeholder, searchDataList, onClickCell }) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList.filter(item => item === searchValue));
  }, [searchDataList, searchValue]);

  return (
    <div className={clsx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input placeholder={placeholder} value={searchValue} onChange={e => setSearchValue(e.target.value)}></input>
      </div>
      {filteredData.map(data => (
        <div role="button" key={data} onClick={onClickCell}>
          {data}
        </div>
      ))}
    </div>
  );
}
