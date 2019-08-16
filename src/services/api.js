import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3333'
      : 'https://my-json-server.typicode.com/giovanniantonaccio/rocketshoesMobile',
});

export default api;
