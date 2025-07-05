import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const getIdeas = async (prompt) => {
  const res = await axios.post(`${API_URL}/generate`, { prompt });
  return res.data;
};
