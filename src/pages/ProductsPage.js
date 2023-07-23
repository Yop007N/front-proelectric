import React from 'react';
import ProductForm from '../components/ProductForm';

function ProductsPage() {
  return (
    <div  className="container text-white">
      <h2 className="text-white">Página de Productos</h2>
      <ProductForm />
      {/* Aquí puedes mostrar la lista de productos y agregar funcionalidades adicionales */}
    </div>
  );
}

export default ProductsPage;
