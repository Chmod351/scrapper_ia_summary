import axios from 'axios';

export const BASE_URL = 'https://scraper-5ask.onrender.com/api/v1';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
