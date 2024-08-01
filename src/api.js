const api = {
    get: async (endpoint) => {
      const response = await fetch(`http://localhost:5062/api${endpoint}`);
      if (!response.ok) {
        throw new Error('Error en la respuesta api');
      }
      return response.json();
    },
    post: async (endpoint, data) => {
      const response = await fetch(`http://localhost:5062/api${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Error en la respuesta api');
      }
      return response.json();
    },
    
  };
  
  export default api;