import { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <header className={styles.header}>Header</header>
      <div className={styles.containerHeader}>
        <div className={styles.buttonContainer}>
          <Button style={{ backgroundColor: 'transparent', color: 'black', fontSize: '12px' }}>
            <i class="fa-solid fa-thumbtack"></i> Pin
          </Button>
          <Button style={{ backgroundColor: 'transparent', color: 'black', fontSize: '12px' }}>
            Watch <CircleBadge>{number}</CircleBadge>
          </Button>
          <Button style={{ backgroundColor: 'transparent', color: 'black', fontSize: '12px' }}>
            Fork <CircleBadge>{number}</CircleBadge>
          </Button>
          <Button style={{ backgroundColor: 'transparent', color: 'black', fontSize: '12px' }}>
            Star <CircleBadge>{number}</CircleBadge>
          </Button>
        </div>
      </div>
      <div className={styles.listContainer}>
        <Button style={{ fontSize: '14px', backgroundColor: 'green', color: 'white' }}>New Issue</Button>
      </div>
      <footer className={styles.footer}>footer</footer>
    </>
  );
}

function CircleBadge({ children }) {
  return <div className={styles.circleBadge}>{children}</div>;
}

export default App;
