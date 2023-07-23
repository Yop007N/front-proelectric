import React, { useState } from 'react';

function ClientForm() {
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientRUC, setClientRUC] = useState('');
  const [clientCI, setClientCI] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Aquí puedes tener una lista de clientes. Por ejemplo:
  const clients = [
    { id: 1, name: 'Cliente 1', address: 'Dirección 1', phone: '111111111', email: 'cliente1@example.com', ruc: '11111111', ci: '1111111' },
    { id: 2, name: 'Cliente 2', address: 'Dirección 2', phone: '222222222', email: 'cliente2@example.com', ruc: '22222222', ci: '2222222' },
    // Agrega más clientes aquí...
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del cliente a la API para su registro
    // Implementa la lógica para llamar a la API utilizando el módulo api.js

    // Reinicia los campos de entrada después de agregar el cliente
    setClientName('');
    setClientAddress('');
    setClientPhone('');
    setClientEmail('');
    setClientRUC('');
    setClientCI('');

    // Oculta el formulario de agregar cliente después de agregarlo
    setShowAddForm(false);
  };

  const handleSearch = () => {
    // Filtrar la lista de clientes en función del término de búsqueda
    const filtered = clients.filter(
      (client) =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.ruc.includes(searchTerm) ||
        client.ci.includes(searchTerm)
    );
    setFilteredClients(filtered);
  };

  const handleShowAddForm = () => {
    // Mostrar el formulario de agregar cliente
    setShowAddForm(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Buscar Cliente:</label>
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="RUC, CI o Nombre del Cliente"
        />
        <button type="button" className="btn btn-primary mt-2" onClick={handleSearch}>
          Buscar
        </button>
      </div>
      {filteredClients.map((client) => (
        <div key={client.id} className="mb-3">
          <p><strong>Nombre del Cliente:</strong> {client.name}</p>
          <p><strong>Dirección del Cliente:</strong> {client.address}</p>
          <p><strong>Teléfono del Cliente:</strong> {client.phone}</p>
          <p><strong>Correo Electrónico del Cliente:</strong> {client.email}</p>
          <p><strong>RUC del Cliente:</strong> {client.ruc}</p>
          <p><strong>CI del Cliente:</strong> {client.ci}</p>
        </div>
      ))}
      {!showAddForm && (
        <button className="btn btn-primary" onClick={handleShowAddForm}>
          Agregar Cliente
        </button>
      )}
      {showAddForm && (
        <div>
          <div className="mb-3">
            <label>Nombre del Cliente:</label>
            <input
              type="text"
              className="transparent-input"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Dirección del Cliente:</label>
            <input
              type="text"
              className="transparent-input"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Teléfono del Cliente:</label>
            <input
              type="text"
              className="transparent-input"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Correo Electrónico del Cliente:</label>
            <input
              type="email"
              className="transparent-input"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>RUC del Cliente:</label>
            <input
              type="text"
              className="transparent-input"
              value={clientRUC}
              onChange={(e) => setClientRUC(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>CI del Cliente:</label>
            <input
              type="text"
              className="transparent-input"
              value={clientCI}
              onChange={(e) => setClientCI(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Agregar Cliente
          </button>
          <button className="btn btn-secondary" onClick={() => setShowAddForm(false)}>
            Cancelar
          </button>
        </div>
      )}
    </form>
  );
}

export default ClientForm;
