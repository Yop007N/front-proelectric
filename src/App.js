import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import ClientsPage from './pages/ClientsPage';
import QuotesPage from './pages/QuotesPage';
import './App.css';

function App() {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <Router>
      <div className="background-image">
        <div className="container text-white">
          <div className="row">
            <div className="col">
              <h1 className="text-white"> </h1>
            </div>
            <div className="col">
              <div className="btn-group" role="group">
                <button className="btn btn-primary" onClick={() => handleNavigation('/productos')}>
                  Productos
                </button>
                <button className="btn btn-primary" onClick={() => handleNavigation('/clientes')}>
                  Clientes
                </button>
                <button className="btn btn-primary" onClick={() => handleNavigation('/presupuestos')}>
                  Presupuestos
                </button>
              </div>
            </div>
          </div>
          <Routes>
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/clientes" element={<ClientsPage />} />
            <Route path="/presupuestos" element={<QuotesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
