import axios, {AxiosError} from 'axios';
import store from '@/Store';

const AppAPI = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTU1OTkzYzU2MDFiOTYxM2UwNDFiYzZhNTgzM2QyNCIsIm5iZiI6MTYwMTAwOTMyNy44ODUsInN1YiI6IjVmNmQ3NmFmNmYzMWFmMDAzODEwMzkyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eFEa8mJB_II6vM-JMm91z7jNW4FL4YAgncUceUa43fI',
  },
  timeout: 30000,
});

export const requestInterceptor = () => {
  AppAPI.interceptors.request.use(
    async config => {
      try {
        // const credentials = store.getState().authReducer.user?.token;
        // config.headers = {
        //   ...(config.headers as any),
        //   Authorization: `Bearer ${credentials}`,
        // };
      } catch (error) {
        throw error;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );
};

export const responseInterceptor = () => {
  AppAPI.interceptors.response.use(
    response => response,
    async error => {
      const err = error as AxiosError;
      const {config, response} = err;
      let isRetry;
      if (response?.status === 401 && !isRetry) {
        try {
          isRetry = true;
          // const credentials = store.getState().authReducer.user?.token;
          if (config) {
            // config.headers = {
            //   ...(config.headers as any),
            //   Authorization: `Bearer ${credentials}`,
            // };
            return await axios(config);
          }
        } catch (error) {
          // await logout();
        }
      }
      return Promise.reject(error);
    },
  );
};

export default AppAPI;

// declare HERE all the endpoints you want to use in your app
export const USER = '/users/me';
export const CATEGORIES = '/categories';
export const SUBCATEGORIES = '/categories/subcategory';
