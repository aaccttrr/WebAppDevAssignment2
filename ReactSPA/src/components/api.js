import axios from 'axios';

export const addBookApi = (book) =>{
    return axios.post('/api/books',book)
    .then(resp => resp.data);
};

export const getAll =()=>{
    return axios('/api/books')
    .then(resp => resp.data);
}