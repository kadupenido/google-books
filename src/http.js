
import axios from 'axios';

const client = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    timeout: 2000,
});

export default client; 