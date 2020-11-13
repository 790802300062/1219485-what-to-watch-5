export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREASE_SHOWN_FILMS_AMOUNT: `INCREASE_SHOWN_FILMS_AMOUNT`,
  RESET_SHOWN_FILMS_AMOUNT: `RESET_SHOWN_FILMS_AMOUNT`,
  LOAD_FILMS: `LOAD_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_REVIEWS_FOR_FILM: `LOAD_REVIEWS_FOR_FILM`,
};

export const changeGenre = (genre) => ({
  type: ActionType.CHANGE_GENRE,
  payload: genre,
});

export const increaseShownFilmCards = () => ({
  type: ActionType.INCREASE_SHOWN_FILMS_AMOUNT,
});

export const resetShownFilmCards = () => ({
  type: ActionType.RESET_SHOWN_FILMS_AMOUNT,
});

export const loadFilms = (films) => ({
  type: ActionType.LOAD_FILMS,
  payload: films,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});

export const loadReviewsForFilm = (reviews, filmId) => ({
  type: ActionType.LOAD_REVIEWS_FOR_FILM,
  payload: {
    reviews,
    filmId
  }
});
