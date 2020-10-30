export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  INCREASE_SHOWN_FILMS_AMOUNT: `INCREASE_SHOWN_FILMS_AMOUNT`,
  RESET_SHOWN_FILMS_AMOUNT: `RESET_SHOWN_FILMS_AMOUNT`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  getFilmsByGenre: (genre) => ({
    type: ActionType.GET_FILMS_BY_GENRE,
    payload: genre,
  }),

  increaseShownFilmCards: () => ({
    type: ActionType.INCREASE_SHOWN_FILMS_AMOUNT,
  }),

  resetShownFilmCards: () => ({
    type: ActionType.RESET_SHOWN_FILMS_AMOUNT,
  })
};
