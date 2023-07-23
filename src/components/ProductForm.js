import React, { useState } from 'react';

function ProductForm() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Aquí puedes tener una lista de productos. Por ejemplo:
  const products = [
    { id: 1, name: 'Producto 1', description: 'Descripción 1', price: 10, quantity: 100 },
    { id: 2, name: 'Producto 2', description: 'Descripción 2', price: 20, quantity: 50 },
    // Agrega más productos aquí...
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del producto a la API para su registro
    // Implementa la lógica para llamar a la API utilizando el módulo api.js

    // Reinicia los campos de entrada después de agregar el producto
    setProductName('');
    setProductDescription('');
    setProductPrice(0);
    setProductQuantity(0);

    // Oculta el formulario de agregar producto después de agregarlo
    setShowAddForm(false);
  };

  const handleSearch = () => {
    // Filtrar la lista de productos en función del término de búsqueda
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleShowAddForm = () => {
    // Mostrar el formulario de agregar producto
    setShowAddForm(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Buscar Producto:</label>
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nombre o Descripción del Producto"
        />
        <button type="button" className="btn btn-primary mt-2" onClick={handleSearch}>
          Buscar
        </button>
      </div>
      {filteredProducts.map((product) => (
        <div key={product.id} className="mb-3">
          <p><strong>Nombre del Producto:</strong> {product.name}</p>
          <p><strong>Descripción del Producto:</strong> {product.description}</p>
          <p><strong>Precio Unitario:</strong> {product.price}</p>
          <p><strong>Cantidad en Stock:</strong> {product.quantity}</p>
        </div>
      ))}
      {!showAddForm && (
        <button className="btn btn-primary" onClick={handleShowAddForm}>
          Agregar Producto
        </button>
      )}
      {showAddForm && (
        <div>
          <div className="mb-3">
            <label>Nombre del Producto:</label>
            <input
              type="text"
              className="transparent-input"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Descripción del Producto:</label>
            <input
              type="text"
              className="transparent-input"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Precio Unitario:</label>
            <input
              type="number"
              className="transparent-input"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Cantidad en Stock:</label>
            <input
              type="number"
              className="transparent-input"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Agregar Producto
          </button>
          <button className="btn btn-secondary" onClick={() => setShowAddForm(false)}>
            Cancelar
          </button>
        </div>
      )}
    </form>
  );
}

export default ProductForm;
