import axios from 'axios';
import { getAccessToken } from './auth';

const API_URL = 'http://127.0.0.1:8000/API';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach access token on each request
api.interceptors.request.use(
  async (config) => {
    const publicPaths = ['/register/', '/login/', '/token/', '/token/refresh/', '/token/verify/'];
    const isPublic = publicPaths.some((path) => config.url.includes(path));

    if (!isPublic) {
      const token = await getAccessToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Auto-refresh expired token
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(`${API_URL}/token/refresh/`, { refresh: refreshToken });

        localStorage.setItem('access_token', response.data.access);
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.access}`;
        originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`;

        return api(originalRequest);
      } catch (err) {
        console.error('Refresh failed:', err);
        localStorage.clear();
        window.location.href = '/login';
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export const uploadAudio = async (audioBlob) => {
  const formData = new FormData();
  formData.append('file', audioBlob, 'recording.wav');

  try {
    const response = await api.post('/upload-audio/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Audio upload failed:', error);
    throw error;
  }
};

export default api;
