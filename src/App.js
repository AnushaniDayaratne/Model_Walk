import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Women from './pages/women/Women';
import SalesItems from './pages/salesItems/SalesItems';
import Men from './pages/men/Men';

const App = () => {
  return (
    <Router>
      <Header />
   
        <Route path="/women" component={Women} />
        <Route path="/salesItems" component={SalesItems} />
        <Route path="/men" component={Men} />
      
    </Router>
  );
};

export default App;
