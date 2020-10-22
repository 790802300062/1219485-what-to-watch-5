import React from "react";
import FilmCard from "../film-card/film-card";
import PropTypes from "prop-types";
import {filmValidator} from "../../props-validators/props-validators";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmId: null
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
  }

  _onMouseEnter(evt) {
    evt.preventDefault();
    setTimeout(this.setState({
      activeFilmId: parseInt(evt.currentTarget.dataset.id, 10)
    }), 1000);
  }

  _onMouseLeave(evt) {
    evt.preventDefault();
    this.setState({
      activeFilmId: null
    });
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {
          films.map((film) => {
            return (
              <FilmCard
                key={film.id}
                id={film.id}
                title={film.title}
                poster={film.poster}
                trailer={film.video}
                isActive={film.id === this.state.activeFilmId}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
              />
            );
          })
        }
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmValidator))
};

export default FilmsList;

