import React, { useState } from 'react';
import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';

const QuoteForm = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState([]);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [searchedProducts, setSearchedProducts] = useState([]);

  const clients = [
    { id: 1, name: 'Cliente 1', ruc: '11111111-1', ci: '1111111-1', address: 'Dirección Cliente 1', phone: '12345678', email: 'cliente1@example.com' },
    { id: 2, name: 'Cliente 2', ruc: '22222222-2', ci: '2222222-2', address: 'Dirección Cliente 2', phone: '98765432', email: 'cliente2@example.com' },
    // Agrega más clientes aquí...
  ];

  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', code: '12345', price: 100 },
    { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', code: '67890', price: 200 },
    // Agrega más productos aquí...
  ];

  // Filtra clientes y productos
  const filterClients = (term) => {
    return clients.filter(
      (client) =>
        client.name.toLowerCase().includes(term.toLowerCase()) ||
        client.ruc.toLowerCase().includes(term.toLowerCase()) ||
        client.ci.includes(term)
    );
  };

  const filterProducts = (term) => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase()) ||
        product.code.includes(term)
    );
  };

  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    setSelectedProducts([]);
    setSelectedClient(null);
  };

  const handleSearch = () => {
    const filtered = filterClients(searchTerm);
    setFilteredClients(filtered);
    const searched = filterProducts(searchTerm);
    setSearchedProducts(searched);
  };

  const handleSelectClient = (clientId) => {
    const client = clients.find((c) => c.id === clientId);
    setSelectedClient(client);
    setShowAddProductForm(true);
  };

  const handleShowAddProductForm = () => {
    setShowAddProductForm(true);
  };

  const handleAddProduct = (productId) => {
    setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, productId]);
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts((prevSelectedProducts) => prevSelectedProducts.filter((id) => id !== productId));
  };

  const handleGeneratePDF = () => {
    let totalInGuarani = 0;
    if (selectedProducts.length > 0) {
      totalInGuarani = selectedProducts.reduce((total, productId) => {
        const product = products.find((p) => p.id === productId);
        return total + product.price;
      }, 0);
    }
    // Lógica para generar el PDF con la información del presupuesto
    // Implementa la lógica para generar y mostrar el PDF aquí
  };

  return (
    <form className="transparent-input" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Buscar Cliente (Nombre, RUC o CI):</label>
        <input
          type="text"
          className="form-control transparent-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nombre, RUC o CI"
        />
        <button type="button" className="btn btn-primary mt-2" onClick={handleSearch}>
          Buscar
        </button>
      </div>
      {filteredClients.map((client) => (
        <div key={client.id} className="mb-3">
          <p>
            <strong>Cliente:</strong> {client.name}
            <button
              type="button"
              className="btn btn-primary btn-sm ms-2"
              onClick={() => handleSelectClient(client.id)}
            >
              Seleccionar
            </button>
          </p>
        </div>
      ))}

      {selectedClient && showAddProductForm && (
        <div className="mb-3">
          <label>Productos Disponibles:</label>
          {searchedProducts.map((product) => (
            <div key={product.id} className="mb-2">
              <p>
                <strong>{product.name}</strong> - {product.description} - Código: {product.code} - Precio: {product.price}
              </p>
              <button
                type="button"
                className="btn btn-primary btn-sm me-2"
                onClick={() => handleAddProduct(product.id)}
              >
                Agregar
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedProducts.length > 0 && (
        <div className="mb-3">
          <h4>Productos Seleccionados:</h4>
          {selectedProducts.map((productId) => {
            const product = products.find((p) => p.id === productId);
            return (
              <div key={product.id}>
                <p>
                  <strong>{product.name}</strong> - {product.description} - Código: {product.code} - Precio: {product.price}
                </p>
                <button
                  type="button"
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleRemoveProduct(productId)}
                >
                  Eliminar
                </button>
              </div>
            );
          })}
        </div>
      )}

      <button type="submit" className="btn btn-primary" onClick={handleGeneratePDF}>
        Generar Presupuesto
      </button>

      <div>
        <h4>Presupuesto en PDF:</h4>
        {/* Mostrar aquí el PDF generado */}
      </div>
    </form>
  );
};

export default QuoteForm;
