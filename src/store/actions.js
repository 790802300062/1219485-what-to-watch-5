export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  INCREASE_SHOWN_FILMS_AMOUNT: `INCREASE_SHOWN_FILMS_AMOUNT`,
  RESET_SHOWN_FILMS_AMOUNT: `RESET_SHOWN_FILMS_AMOUNT`,
  LOAD_FILMS: `LOAD_FILMS`
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
