import axios from 'axios';
import useAuth from './useAuth';

const instance = axios.create({
  baseURL: 'http://localhost:8000',
});

useAuth(instance);

export default instance;
