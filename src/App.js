import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import api from './api';

function App() {

  const [productos, setProductos] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api.get('/Productos')
      .then(dataP => setProductos(dataP))
      .catch(error => console.error('Error al cargar productos:', error));
  

  api.get('/Clientes')
      .then(dataC => setClientes(dataC))
      .catch(error => console.error('Error al cargar productos:', error));
  }, []);
  
  return (
    <div className='divContainer'>
      {clientes.map(cliente => (
      <div key={cliente.id}>
        <h3>{cliente.nombre}</h3>
        <p>{cliente.apellido}</p>
      </div>
    ))}
    {productos.map(producto => (
      <div key={producto.id}>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
      </div>
    ))}
  </div>
  );
}

export default App;
