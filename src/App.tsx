import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Header from '../src/components/specific/Header';
import Carrinho from './pages/Carrinho';
import Home from './pages/home';
function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}

export default App;
