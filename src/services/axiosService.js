import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001';

export default () =>
  axios.create({
    baseURL,
  });
