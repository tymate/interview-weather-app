import Axios from 'axios';
import { camelizeKeys } from 'humps';

export const api = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
});

api.interceptors.response.use(response => {
  response.data = camelizeKeys(response.data);
  return response;
});

export default api;
