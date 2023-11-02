import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  // baseURL: 'http://52.41.255.9:5000/api',
  baseURL: 'api',
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Type': 'multipart/form-data',
  },
});

export default api;
