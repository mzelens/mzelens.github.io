import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (localStorage.getItem('accessToken') !== null) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        'accessToken'
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken');
      axios.post('/auth/logout');
    } else {
      console.log(error.response?.message);
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
