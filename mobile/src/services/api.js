import axios from 'axios';

const api = axios.create({
  baseURL: 'http://7h-rfc.anonymous.mobile.exp.direct:3333',
});

export default api;


