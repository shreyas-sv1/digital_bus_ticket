import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    // Attempt a silent token refresh on the first 401, then redirect if it fails.
    if (err.response?.status === 401 && !originalRequest._retried) {
      originalRequest._retried = true;
      const expiredToken = Cookies.get('token');
      if (expiredToken) {
        try {
          const { data } = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
            {},
            { headers: { Authorization: `Bearer ${expiredToken}` } },
          );
          Cookies.set('token', data.token, { expires: 1, sameSite: 'strict' });
          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return api(originalRequest);
        } catch {
          // Refresh failed — fall through to logout
        }
      }
      Cookies.remove('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  },
);

export default api;
