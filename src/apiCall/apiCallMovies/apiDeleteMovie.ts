import axios from 'axios';

export const apiDeleteMovie = (id: number) => axios.delete(`${process.env.API_ROOT}/movies/${id}`);
