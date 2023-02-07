import { useState } from 'react';
import clsx from 'clsx';
import styles from '../styles/ListContainer.module.css';

function OpenClosedFilter({ size, onClick, state, selected }) {
  return (
    <span role="button" className={clsx(styles.textFilter, { [styles.selected]: selected })} onClick={onClick}>
      {size} {state}
    </span>
  );
}

export default function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);
  const closeModeDataSize = 2;
  const openModeDataSize = 1;
  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  );
}
