import axios from 'axios';

const url = 'http://192.168.15.41:5000';
// const url = 'http://192.168.1.11:5000';

export const api = axios.create({ baseURL: url });
