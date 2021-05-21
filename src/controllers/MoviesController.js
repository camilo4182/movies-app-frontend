import axios from 'axios';

export const MoviesController = {
    register(movie) {
        return axios({
            method: 'POST',
            baseURL: process.env.API,
            url: 'movies',
            data: movie
        });
    },
    list() {
        return axios({
            method: 'GET',
            baseURL: process.env.API,
            url: 'movies'
        });
    },
    delete(movie_title) {
        return axios({
            method: 'DELETE',
            baseURL: process.env.API,
            url: `movies/${movie_title}`
        });
    }
}
