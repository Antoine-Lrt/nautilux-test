import axios from 'axios';

export const fetchIntersApi = async () => await axios.get('http://localhost:3001/interventions');
