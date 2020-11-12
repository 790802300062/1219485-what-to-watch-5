import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {FilmTypeProps, ReviewTypeProps} from "../../prop-types-validations";
import LogoBlock from "../logo-block/logo-block";
import UserBlock from "../user-block/user-block";
import FilmScreenTabs from "../film-screen-tabs/film-screen-tabs";
import FilmCardList from "../film-card-list/film-card-list";
import withFilmReviewTabs from "../../hocs/with-film-review-tabs/with-film-review-tabs";
import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import {AppRoute} from "../../constants";

const FilmCardListWithActivePlayer = withActivePlayer(FilmCardList);
const FilmScreenWithFilmReviewTabs = withFilmReviewTabs(FilmScreenTabs);

const SAME_GENRE_FILMS_AMOUNT = 4;

const FilmScreen = (props) => {
  const {onPlayButtonClick, reviews, film, films} = props;

  const {
    id,
    title,
    genre,
    releaseYear,
    posterImage,
    backgroundImage,
    backgroundColor
  } = film;

  const sameGenreFilms = films
    .filter((filmItem) => ((filmItem.title !== film.title) && (filmItem.genre === film.genre)
    .slice(0, SAME_GENRE_FILMS_AMOUNT)));

  console.log(sameGenreFilms);

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} style={{backgroundColor}}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <LogoBlock />
            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{releaseYear}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button"
                  onClick={onPlayButtonClick}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`${AppRoute.FILMS}/${id}/review`} className="btn movie-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={title} width="218" height="327" />
            </div>

            <FilmScreenWithFilmReviewTabs film={film} reviews={reviews} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmCardListWithActivePlayer films={sameGenreFilms}/>

        </section>

        <footer className="page-footer">
          <LogoBlock isFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

FilmScreen.propTypes = {
  film: FilmTypeProps.filmCard,
  films: FilmTypeProps.films,
  reviews: ReviewTypeProps.reviewsList,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default FilmScreen;
