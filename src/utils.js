import {ALL_GENRES_FILTER} from "./constants";

export const getFilmGenres = (films) => {
  return [...new Set(films.map((film) => film.genre))];
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getFilmsFilter = (films) => {
  const filmGenres = getFilmGenres(films);

  const filmFilter = {
    [ALL_GENRES_FILTER]: (filmCards) => filmCards,
  };

  filmGenres.forEach((filmGenre) => {
    filmFilter[filmGenre] = (filmCards) => {
      return filmCards.filter((film) => film.genre === filmGenre);
    };
  });

  return filmFilter;
};
