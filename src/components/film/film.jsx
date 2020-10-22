import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import filmComponents from "./components";
import FilmsList from "../films-list/films-list";
import {filmValidator, reviewValidator} from "../../props-validators/props-validators";
import {getRandomElement} from "../../utils/common";

const {FilmOverview, FilmDetails, FilmReviews} = filmComponents;

class Film extends React.PureComponent {
  constructor(props) {
    super(props);

    this._promoFilm = getRandomElement(this.props.films);

    this.state = {
      activeFilmSection: `Overview`
    };

    this._onFilmSectionHandler = this._onFilmSectionHandler.bind(this);
  }

  _onFilmSectionHandler(evt) {
    evt.preventDefault();
    this.setState({activeFilmSection: `${evt.target.textContent}`});
  }

  _renderActiveSection() {
    const {reviews} = this.props;

    switch (this.state.activeFilmSection) {
      case `Overview`:
        return (
          <FilmOverview promoFilm={this._promoFilm} />
        );
      case `Details`:
        return (
          <FilmDetails promoFilm={this._promoFilm} />
        );
      case `Reviews`:
        return (
          <FilmReviews reviews={reviews} />
        );
      default:
        return ``;
    }
  }

  render() {
    const {films} = this.props;

    return (
      <>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={this._promoFilm.poster.src} alt={this._promoFilm.title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header movie-card__head">
              <div className="logo">
                <Link to="/" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </Link>
              </div>
              <div className="user-block">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{this._promoFilm.title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{this._promoFilm.genre}</span>
                  <span className="movie-card__year">{this._promoFilm.year}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
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
                  <Link to="/films/:id/review" className="btn movie-card__button">Add review</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={this._promoFilm.poster.src} alt={`${this._promoFilm.title} poster`} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list" onClick={this._onFilmSectionHandler}>
                    <li className={`movie-nav__item${this.state.activeFilmSection === `Overview` ? ` movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link"
                        onClick={this._onFilmSectionHandler}
                      >Overview</a>
                    </li>
                    <li className={`movie-nav__item${this.state.activeFilmSection === `Details` ? ` movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link"
                        onClick={this._onFilmSectionHandler}
                      >Details</a>
                    </li>
                    <li className={`movie-nav__item${this.state.activeFilmSection === `Reviews` ? ` movie-nav__item--active` : ``}`}>
                      <a href="#" className="movie-nav__link"
                        onClick={this._onFilmSectionHandler}
                      >Reviews</a>
                    </li>
                  </ul>
                </nav>

                {this._renderActiveSection()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmsList films={films.slice(0, 4)}/>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

Film.propTypes = {
  film: PropTypes.shape(filmValidator),
  films: PropTypes.arrayOf(PropTypes.shape(filmValidator)),
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewValidator)),
};

export default Film;
