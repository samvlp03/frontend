import api from './api';


const apiServices = {
  // Authentication
  login: (credentials) => api.post('/login/', credentials),
  register: (data) => api.post('/register/', data),

  // Analysis
  analyzeAudioAndText: (data) => api.post('/analysis/audio/', data),
  analyzeUploadedAudio: (filename) => api.get(`/analysis/audio/${filename}/`),
  analyzeVisual: (data) => api.post('/analysis/visual/', data),
  saveAnalysis: (data) => api.post('/save/', data),
  analyzeChatText: (data) => api.post('/analysis/chat-text/', data),

  // Video-related
  startVideoProcessing: () => api.post('/video/start/'),
  stopVideoProcessing: () => api.post('/video/stop/'),
  getVideoStatus: () => api.get('/video/status/'),

  // Reports
  getReports: (config) => api.get('/user-reports/', config),
  getReport: (id) => api.get(`/reports/${id}/`),
  downloadReport: (id) => api.get(`/reports/${id}/download/`, { responseType: 'blob' }),

  // Users
  getUser: (id) => api.get(`/users/${id}/`),
  updateUser: (id, data) => api.patch(`/users/${id}/`, data),
};

export default apiServices;
