import {API_KEY} from './constants'

function rand(){
let max =20
let min =1;
let num = Math.floor(Math.random() * (max - min + 1)) + min;
return num
}

export const trending = `trending/all/week?api_key=${API_KEY}&language=en-US&page=${rand()}`;

export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213&page=${rand()}`;

export const action = `discover/movie?api_key=${API_KEY}&with_geners=28&page=${rand()}`;

export const horror = `discover/movie?api_key=${API_KEY}&with_geners=27&page=${rand()}`;

export const romance = `discover/movie?api_key=${API_KEY}&with_geners=10749&page=${rand()}`;

export const documentaries = `discover/movie?api_key=${API_KEY}&with_geners=99&page=${rand()}`;

export const comedy = `discover/movie?api_key=${API_KEY}&with_geners=10752&page=${rand()}`;