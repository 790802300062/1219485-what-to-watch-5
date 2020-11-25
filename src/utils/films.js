import {FilmRating, FILM_RATING_SCALE} from "../constants";
import {ALL_GENRES_FILTER} from "../constants";

export const getSimilarFilms = (films, {genre, id}) => {

  const genreToFind = Array.isArray(genre) ? genre : [genre];

  return films.filter((film)=>film.id !== id && (Array.isArray(film.genre)
    ? film.genre.find((it) => genreToFind.includes(it))
    : genreToFind.includes(film.genre)));
};

export const getAverageRating = (reviews)=>{
  const rewiewsAmount = reviews.length;

  if (!reviews || !reviews.length) {
    return 0;
  }

  const totalRating = reviews.reduce((result, review)=>{

    return result + review.rating;
  }, 0);
  const averageRating = Math.round(totalRating / rewiewsAmount * 10) / 10;

  return averageRating;
};

export const isFilmBelongsToGenre = (film, genre)=>{
  return Array.isArray(film.genre)
    ? film.genre.includes(genre)
    : film.genre === genre;
};

export const getRatingDescription = (reviews) =>{

  if (!reviews || !reviews.length) {
    return FilmRating.NOT_RATED;
  }
  const averageRating = getAverageRating(reviews);

  for (const filmRating of FILM_RATING_SCALE) {
    if (averageRating >= filmRating.minScore) {

      return filmRating.rating;
    }
  }

  return FilmRating.NOT_RATED;
};

export const getGenresList = (films)=>{
  const MAX_GENRES_AMOUNT = 9;

  let genres = [];

  films.forEach((film)=>{
    genres.push(...Array.isArray(film.genre) ? film.genre : [film.genre]);
  });

  genres = genres.map((genre)=>genre.toLowerCase());

  let uniqueGenres = [...new Set(genres)];

  uniqueGenres.sort();
  uniqueGenres = uniqueGenres.slice(0, MAX_GENRES_AMOUNT);
  uniqueGenres.unshift(ALL_GENRES_FILTER.toLowerCase());

  return uniqueGenres;
};
