import axios from 'axios';

// Créez une instance Axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost', // Remplacez par l'URL de votre backend
});

// Ajoutez un interceptor pour les requêtes
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Remplacez par votre méthode pour obtenir le token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
