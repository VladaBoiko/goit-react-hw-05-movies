import axios from 'axios';
const KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';
const language = 'en';
axios.defaults.baseURL = URL;

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export const dataMovieList = async () => {
  try {
    const server = await axios.get(`3/trending/movie/day?api_key=${KEY}`);
    const data = await server.data.results;
    return data;
  } catch (error) {
    console.error(error);
  }
};
// запит повної інформації про фільм для сторінки кінофільму
export const dataMovie = async id => {
  try {
    const server = await axios.get(
      `3/movie/${id}?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
// запит інформації про акторський склад для сторінки кінофільму
export const dataAuthors = async id => {
  try {
    const server = await axios.get(
      `3/movie/${id}/credits?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
// запит оглядів для сторінки кінофільму
export const dataReviews = async id => {
  try {
    const server = await axios.get(
      `3/movie/${id}/reviews?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
// пошук фільму за ключовим словом на сторінці фільмів
export const dataSearch = async query => {
  try {
    const server = await axios.get(
      `3/search/movie?api_key=${KEY}&language=${language}&query=${query}&page=1&include_adult=false`
    );
    const data = await server.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
