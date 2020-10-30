import {ALL_GENRES_FILTER, FILMS_AMOUNT_PER_STEP} from "../constants";
import films from "../mocks/films";
import {extend, getFilmsFilter} from "../utils";
import {ActionType} from "./actions";

const initialState = {
  activeGenre: ALL_GENRES_FILTER,
  films,
  initialFilms: films,
  shownFilmsCount: Math.min(FILMS_AMOUNT_PER_STEP, films.length)
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_FILMS_BY_GENRE:
      const filmsFilter = getFilmsFilter(state.initialFilms);
      const genre = action.payload;
      const filmsByGenre = filmsFilter[genre](state.initialFilms);

      return extend(state, {
        films: filmsByGenre,
      });

    case ActionType.INCREASE_SHOWN_FILMS_AMOUNT:
      return extend(state, {
        shownFilmsCount: Math.min(state.shownFilmsCount + FILMS_AMOUNT_PER_STEP, state.initialFilms.length),
      });

    case ActionType.RESET_SHOWN_FILMS_AMOUNT:
      return extend(state, {
        shownFilmsCount: Math.min(FILMS_AMOUNT_PER_STEP, state.initialFilms.length),
      });

    default:
      return state;
  }
};

export {reducer};
