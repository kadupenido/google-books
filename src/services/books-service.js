import client from '../http';

const getBooks = (query) => {
    return client.get('/volumes?q=' + query);
};

export default getBooks;