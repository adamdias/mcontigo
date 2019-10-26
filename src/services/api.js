import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev.mejorconsalud.com/wp-json/mc/v1',
});

export default api;
