import axios from 'axios';

export const fetchIntersApi = async () =>
  await axios.get(`https://jsonplaceholder.typicode.com/posts`);
