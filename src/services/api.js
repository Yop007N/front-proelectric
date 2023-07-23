// Importar librería de Axios para realizar peticiones HTTP
import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // URL base de tu servidor backend

const api = {
  // Obtener lista de productos
  getProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/productos`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la lista de productos:', error);
      return [];
    }
  },

  // Agregar un nuevo producto
  addProduct: async (productData) => {
    try {
      const response = await axios.post(`${BASE_URL}/productos`, productData);
      return response.data;
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      return null;
    }
  },

  // Obtener lista de clientes
  getClients: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/clientes`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la lista de clientes:', error);
      return [];
    }
  },

  // Agregar un nuevo cliente
  addClient: async (clientData) => {
    try {
      const response = await axios.post(`${BASE_URL}/clientes`, clientData);
      return response.data;
    } catch (error) {
      console.error('Error al agregar el cliente:', error);
      return null;
    }
  },

  // Obtener lista de presupuestos
  getQuotes: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/presupuestos`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener la lista de presupuestos:', error);
      return [];
    }
  },

  // Agregar un nuevo presupuesto
  addQuote: async (quoteData) => {
    try {
      const response = await axios.post(`${BASE_URL}/presupuestos`, quoteData);
      return response.data;
    } catch (error) {
      console.error('Error al agregar el presupuesto:', error);
      return null;
    }
  },

  // Eliminar un producto
  deleteProduct: async (productId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/productos/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      return null;
    }
  },

  // Eliminar un cliente
  deleteClient: async (clientId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/clientes/${clientId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el cliente:', error);
      return null;
    }
  },

  // Eliminar un presupuesto
  deleteQuote: async (quoteId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/presupuestos/${quoteId}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar el presupuesto:', error);
      return null;
    }
  },
};

export default api;
