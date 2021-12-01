import axios from 'axios';

export const apiDeleteMovie = (id: number) => axios.delete(`http://localhost:4000/movies/${id}`);
