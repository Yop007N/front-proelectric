import React from 'react';
import QuoteForm from '../components/QuoteForm';

function QuotesPage() {
  return (
    <div  className="container text-white">
      <h2 className="text-white">Página de Presupuestos</h2>
      <QuoteForm />
      {/* Aquí puedes mostrar la lista de presupuestos y agregar funcionalidades adicionales */}
    </div>
  );
}

export default QuotesPage;
