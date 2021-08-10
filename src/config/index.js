const API_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.REACT_APP_BASE_URL;

export default {
  API_URL,
};
