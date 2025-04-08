import api from './api';

const apiServices = {
  // Authentication
  login: (credentials) => api.post('/login/', credentials),
  register: (data) => api.post('/register/', data),
  // refreshToken: (refresh) => api.post('/token/refresh/', { refresh }),
  // verifyToken: (token) => api.post('/token/verify/', { token }),

  // Analysis
  analyzeAudioAndText: (data) => api.post('/analysis/audio/', data),
  analyzeVisual: (data) => api.post('/analysis/visual/', data),
  saveAnalysis: (data) => api.post('/analysis/save/', data),

  // Video-related
  startVideoProcessing: () => api.post('/video/start/'),
  stopVideoProcessing: () => api.post('/video/stop/'),
  getVideoStatus: () => api.get('/video/status/'),

  // Reports
  getReports: () => api.get('/reports/'),
  getReport: (id) => api.get(`/reports/${id}/`),
  downloadReport: (id) => api.get(`/reports/${id}/download/`, { responseType: 'blob' }),

  // Users
  getUser: (id) => api.get(`/users/${id}/`),
  updateUser: (id, data) => api.patch(`/users/${id}/`, data),
};

export default apiServices;
