import {createSelector} from "reselect";
import {ALL_GENRES_FILTER, SHOWN_FILMS_INITIAL_AMOUNT} from "../../constants";
import {extend} from "../../utils/common";
import {getGenresList, isFilmBelongsToGenre} from "../../utils/films";
import {selectFilms} from "../films/films";
import {NameSpace} from "../namespace";

export const ActionType = {
  CHANGE_CURRENT_GENRE: `CHANGE_CURRENT_GENRE`,
  INCREASE_SHOWN_FILMS_AMOUNT: `INCREASE_SHOWN_FILMS_AMOUNT`,
  RESET_SHOWN_FILMS_AMOUNT: `RESET_SHOWN_FILMS_AMOUNT`,
};

const initialState = {
  currentGenre: ALL_GENRES_FILTER,
  shownFilmsAmount: SHOWN_FILMS_INITIAL_AMOUNT,
};

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.CHANGE_CURRENT_GENRE:
      return extend(state, {currentGenre: action.payload});

    case ActionType.INCREASE_SHOWN_FILMS_AMOUNT:
      return extend(state, {shownFilmsAmount: state.shownFilmsAmount + action.payload});

    case ActionType.RESET_SHOWN_FILMS_AMOUNT:
      return extend(state, {shownFilmsAmount: SHOWN_FILMS_INITIAL_AMOUNT});

    default:
      return state;
  }
};

export const changeCurrentGenre = (genre)=>({
  type: ActionType.CHANGE_CURRENT_GENRE,
  payload: genre
});

export const increaseShownFilmsAmount = (step)=>({
  type: ActionType.INCREASE_SHOWN_FILMS_AMOUNT,
  payload: step
});

export const resetShownFilmsAmount = ()=>({
  type: ActionType.RESET_SHOWN_FILMS_AMOUNT,
  payload: {}
});

const nameSpace = NameSpace.CATALOG;

export const getCurrentGenre = (state) => state[nameSpace].currentGenre;
export const getShownFilmsAmount = (state) => state[nameSpace].shownFilmsAmount;

export const getFilteredFilms = createSelector(
    [selectFilms, getCurrentGenre],
    (films, genre)=> genre === ALL_GENRES_FILTER ? films : films.filter((film) => isFilmBelongsToGenre(film, genre))
);

export const isAllFilmsShown = (state) => getShownFilmsAmount(state) >= getFilteredFilms(state).length;
export const selectGenreList = (state) => getGenresList(selectFilms(state));
