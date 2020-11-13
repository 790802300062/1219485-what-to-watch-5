import {ALL_GENRES_FILTER, Rating} from "./constants";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

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

dayjs.extend(duration);

export const getDurationTextInHoursAndMinutes = (timeInMinutes) => {
  const minutesDuration = dayjs.duration(timeInMinutes, `m`);
  const hours = minutesDuration.hours();
  const minutes = minutesDuration.minutes();

  return `${hours > 0 ? `${hours}h ` : ``}${minutes}m`;
};

export const getFullDurationWithColons = (timeInMinutes) => {
  const minutesDuration = dayjs.duration(timeInMinutes, `m`);

  const hours = minutesDuration.hours();
  const minutes = minutesDuration.minutes();
  const seconds = minutesDuration.seconds();

  const hoursText = hours < 10 ? `0${hours}` : hours;
  const minutesText = minutes < 10 ? `0${minutes}` : minutes;
  const secondsText = seconds < 10 ? `0${seconds}` : seconds;

  return `${hoursText}:${minutesText}:${secondsText}`;
};

export const getFilmById = (films, id) => {
  return films.find((filmItem) => Number(id) === filmItem.id);
};

export const getRatingDescription = (rating) => {
  switch (rating) {
    case (rating >= 0 && rating < 3):
      return Rating.BAD;
    case (rating >= 3 && rating < 5):
      return Rating.NORMAL;
    case (rating >= 5 && rating < 8):
      return Rating.GOOD;
    case (rating >= 8 && rating < 10):
      return Rating.VERY_GOOD;
    default:
      return Rating.AWESOME;
  }
};

export const formatDate = (date) => {
  return dayjs(date).format(`MMMM D, YYYY`);
};

export const adaptFilmToClient = (film) => {
  const adaptedFilm = {
    id: film.id,
    description: film.description,
    rating: film.rating,
    director: film.director,
    starring: film.starring,
    genre: film.genre,
    title: film.name,
    releaseYear: film.released,
    previewImage: film.preview_image,
    posterImage: film.poster_image,
    ratingsCount: film.scores_count,
    runtime: film.run_time,
    video: film.video_link,
    backgroundColor: film.background_color,
    backgroundImage: film.background_image,
    isFavorite: film.is_favorite,
    videoPreview: film.preview_video_link,
  };

  return adaptedFilm;
};

export const adaptReviewToClient = (review) => {
  const adaptedReview = {
    id: review.id,
    text: review.comment,
    filmRating: review.rating,
    userName: review.user.name,
    userId: review.user.id,
    date: review.date,
  };

  return adaptedReview;
};
