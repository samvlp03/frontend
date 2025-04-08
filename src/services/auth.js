import api from './api';

export const getAccessToken = async () => {
  const token = localStorage.getItem('access_token');
  if (!token) return null;

  try {
    await api.post('/token/verify/', { token });
    return token;
  } catch (err) {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      const response = await api.post('/token/refresh/', { refresh: refreshToken });
      localStorage.setItem('access_token', response.data.access);
      return response.data.access;
    } catch (refreshError) {
      console.error('Refresh failed:', refreshError);
      localStorage.clear();
      return null;
    }
  }
};
