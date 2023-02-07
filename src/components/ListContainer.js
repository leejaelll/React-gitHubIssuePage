import { useState } from 'react';
import styles from '../styles/ListContainer.module.css';
import Button from './Button';
import ListItem from './ListItem';
import ListItemLayout from './ListItemLayout';
import Modal from './Modal';
import OpenClosedFilters from './OpenClosedFilter';
import Pagination from './Pagination';

export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  // const [checkedList, setCheckedList] = useState([]);

  return (
    <>
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
        <OpenClosedFilters />
        <ListItemLayout className={styles.listFilter}>
          <ListFilter
            onChangeFilter={fillteredData => {
              // 필터링된 요소에 맞게 데이터 불러오기
              // const data = getData('필터링 정보')
              // setList(data)
            }}
          />
        </ListItemLayout>

        {/* ListItem section */}
        <div className={styles.container}>
          {list.map((itemItem, index) => (
            <ListItem key={index} IssueBadges={[{ color: 'red', title: 'Bug' }]} />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination maxPage={10} currentPage={page} onClickPageButton={number => setPage(number)} />
      </div>
    </>
  );
}

function ListFilter({ onChangeFilter }) {
  return (
    <>
      <div className={styles.filterList}>
        <ListFilterItem>Author</ListFilterItem>
        <ListFilterItem>Label</ListFilterItem>
        <ListFilterItem>Procjects</ListFilterItem>
        <ListFilterItem>Milestones</ListFilterItem>
        <ListFilterItem>Assignee</ListFilterItem>
        <ListFilterItem>Sort</ListFilterItem>
      </div>
    </>
  );
}

function ListFilterItem({ children, onChangeFilter }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.filterItem}>
      <span role="button" onClick={() => setShowModal(true)}>
        {children} ▼
      </span>
      <div className={styles.modalContainer}>
        <Modal
          opened={showModal}
          onClose={() => setShowModal(false)}
          placeholder="Filter Labels"
          searchDataList={['Type: feat', 'Type: Docs', 'Type: Conf']}
          onClickCell={() => {
            // 클릭된 정보를 통해 리스트 필터링
            // onChangeFilter는 ListFilter를 사용하는 상위함수에서 prop으로 받아온다.
            // onChangeFilter();
          }}
        />
      </div>
    </div>
  );
}
