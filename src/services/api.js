import axios from 'axios';

const api = axios.create({
  /* Emulador AndroidStudio -> baseURL: 'http://10.0.2.2:3333', */
  /* Emulador Genymotion -> baseURL: 'http://10.0.3.2:3333', */
  /* No IOS pode usar -> baseURL: 'http://localhost:3333' */
  /* Dispositivo físico: usa o ip da sua rede -> baseURL: 'http://10.0.0.161:3333' */
  baseURL: 'http://10.0.0.161:3333',
});

export default api;
