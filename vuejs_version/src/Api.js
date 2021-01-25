import axios from 'axios';

export const MyApiClient = axios.create({
  baseURL: 'https://jsonkeeper.com/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});