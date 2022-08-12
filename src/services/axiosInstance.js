import axios from 'axios';

const key = '57894e8c954bd97aec67f1bde7e9a48aff3eb121994346bfb6804cc4f45549fa';

const baseURL = process.env.VUE_APP_MAIN_URL;

const instance = axios.create({
  baseURL,
  headers: {
    authorization: `Apikey ${key}`,
  },
});

/**
 * Прослойка перед запросом на сервер
 */
instance.interceptors.request.use((request) => {
  console.log('request', request);
  return request;
});

export { instance as axios, baseURL };

export default instance;
