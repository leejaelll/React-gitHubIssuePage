import styles from '../styles/Pagination.module.css';
import clsx from 'clsx';

export default function Pagination({ currentPage, maxPage, onClickPageButton }) {
  return (
    <div>
      <button className={clsx(styles.button, styles.blueButton)} disabled={currentPage === 1}>
        {'< previous'}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton number={i + 1} onClick={onClickPageButton} selected={i + 1 === currentPage} />
      ))}
      <button className={clsx(styles.button, styles.blueButton)} disabled={currentPage === maxPage}>
        {'next >'}
      </button>
    </div>
  );
}

function PageButton({ number, onClick, selected }) {
  return (
    <button className={clsx(styles.button, { [styles.selected]: selected })} onClick={() => onClick(number)}>
      {number}
    </button>
  );
}
