import api from './api';

export const coursesAPI = {
  getAllCourses: () => api.get('/api/courses'),
  getCourseById: (id) => api.get(`/api/courses/${id}`),
  createCourse: (courseData) => api.post('/api/courses', courseData),
  updateCourse: (id, courseData) => api.put(`/api/courses/${id}`, courseData),
  deleteCourse: (id) => api.delete(`/api/courses/${id}`),
};