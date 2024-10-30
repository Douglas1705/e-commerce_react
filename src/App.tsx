import Header from '../src/components/specific/Header';
import Apresentation from './components/specific/section/Apresentation';
import Catalog from './components/specific/section/Catalog';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Apresentation />
      <Catalog />
    </>
  );
}

export default App;
