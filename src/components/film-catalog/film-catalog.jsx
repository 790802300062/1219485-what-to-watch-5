import PropTypes from 'prop-types';
import React from "react";
import {connect} from 'react-redux';
import {SHOW_MORE_FILMS_STEP} from '../../constants';
import {
  changeCurrentGenre,
  increaseShownFilmsAmount,
  resetShownFilmsAmount,
  getCurrentGenre,
  getFilteredFilms,
  selectGenreList,
<<<<<<< HEAD
  isAllFilmsShown,
=======
  selectIsAllFilmsShown,
>>>>>>> fbef7652c890ac2d533c3450fe44974a2457fe71
  getShownFilmsAmount} from '../../store/catalog/catalog';
import {filmPropTypesShape} from "../../utils/props-validation";
import FilmsList from "../films-list/films-list";
import GenreFilter from "../genre-filter/genre-filter";
import ShowMoreButton from '../show-more-button/show-more-button';

export const FilmCatalog = (props) => {
<<<<<<< HEAD
  const {films, currentGenre, genres} = props;
=======
  const {films, currentGenre, genres, isAllFilmsShown} = props;
>>>>>>> fbef7652c890ac2d533c3450fe44974a2457fe71
  const {onGenreChangeAction, onLoadMoreButtonClickAction} = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreFilter
        genres={genres}
        onFilterChange = {(newGenre)=>{
          if (newGenre !== currentGenre) {
            onGenreChangeAction(newGenre);
          }
        }} activeFilter = {currentGenre}/>

      <FilmsList films = {films}/>

      {!isAllFilmsShown && <ShowMoreButton onClick = {onLoadMoreButtonClickAction}/>}
    </section>);
};

FilmCatalog.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(filmPropTypesShape).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAllFilmsShown: PropTypes.bool.isRequired,
  onGenreChangeAction: PropTypes.func.isRequired,
  onLoadMoreButtonClickAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const shownFilmsAmount = getShownFilmsAmount(state);
  const films = getFilteredFilms(state).slice(0, shownFilmsAmount);

  return {
    films,
    genres: selectGenreList(state),
    currentGenre: getCurrentGenre(state),
<<<<<<< HEAD
    isAllFilmsShown: isAllFilmsShown(state)};
=======
    isAllFilmsShown: selectIsAllFilmsShown(state)};
>>>>>>> fbef7652c890ac2d533c3450fe44974a2457fe71
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChangeAction(currentGenre) {
    dispatch(changeCurrentGenre(currentGenre));
    dispatch(resetShownFilmsAmount());
  },
  onLoadMoreButtonClickAction() {
    dispatch(increaseShownFilmsAmount(SHOW_MORE_FILMS_STEP));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmCatalog);
