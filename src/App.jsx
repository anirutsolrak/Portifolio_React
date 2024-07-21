import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Main from './componentes/Main';
import Curriculo from './componentes/Curriculo';
import Projetos from './componentes/Projetos';
import Footer from './componentes/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
