import axios from 'axios';

const api = axios.create({
  baseURL: __DEV__
    ? 'http://localhost:3333'
    : 'https://my-json-server.typicode.com/giovanniantonaccio/rocketshoesMobile',
});

export default api;
