import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Login failed:', error.response?.data?.message || error.message);
    return { success: false, message: error.response?.data?.message || 'Login failed' };
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error.response?.data?.message || error.message);
    return { success: false, message: error.response?.data?.message || 'Registration failed' };
  }
};
