import { useState } from 'react';

/* ----------------------------------- Component ----------------------------------- */
import Header from './components/Header';
import ContainerHeader from './components/ContainerHeader';
import ListContainer from './components/ListContainer';
import Footer from './components/Footer';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <Header />
      <ContainerHeader numberProps={number} />
      <ListContainer />
      <Footer />
    </>
  );
}

export default App;
