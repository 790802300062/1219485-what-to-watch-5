import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getRandomInteger} from "../../utils/common";

class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, poster, trailer, onMouseEnter, onMouseLeave, id, isActive} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-id={id}
      >
        <Link to={`/films/${getRandomInteger(0, 8)}`}>
          {isActive
            ? <video src={trailer.src} autoPlay width="280" height="175">Something went wrong</video>
            : <div className="small-movie-card__image">
              <img src={poster.src} alt={title} width="280" height="175" />
            </div>};
        </Link>

        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.objectOf(PropTypes.string),
  trailer: PropTypes.objectOf(PropTypes.string),
  isActive: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default FilmCard;
