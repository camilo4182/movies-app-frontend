import axios from 'axios';

export const MoviesController = {
    register(movie) {
        return axios({
            method: 'POST',
            baseURL: process.env.API,
            url: 'movies',
            headers:{
                'Content-Type': 'application/json'
            },
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
    delete(title) {
        return axios({
            method: 'DELETE',
            baseURL: process.env.API,
            url: `movies/${title}`
        });
    },
    get(title) {
        return axios({
            method: 'GET',
            baseURL: process.env.API,
            url: `movies/${title}`,
            headers:{
                'Content-Type': 'application/json'
            },
        });
    },
    update(title, movie){
        return axios({
            method: 'PUT',
            baseURL: process.env.API,
            url: `movies/${title}`,
            headers:{
                'Content-Type': 'application/json'
            },
            data: movie
        });
    }
}

