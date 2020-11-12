import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {FilmTypeProps} from "../../prop-types-validations";
import {AppRoute} from "../../constants";

const CardVideoSize = {
  WIDTH: 280,
  HEIGHT: 175,
};

const VIDEO_STYLES = {
  verticalAlign: `top`,
  width: `100%`,
  height: `100%`,
  objectFit: `cover`,
};

const FilmCard = (props) => {
  const {renderPlayer, mouseOverHandler, mouseLeaveHandler, filmId} = props;
  const {
    id,
    title,
    previewImage,
    videoPreview,
  } = props.film;

  const videoPlayerSettings = {
    previewImage,
    videoPreview,
    filmId,
    width: CardVideoSize.WIDTH,
    height: CardVideoSize.HEIGHT,
    videoStyles: VIDEO_STYLES,
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        mouseOverHandler(filmId);
      }}
      onMouseLeave={mouseLeaveHandler}
    >
      <div className="small-movie-card__image">
        {renderPlayer(videoPlayerSettings)}
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.FILMS}/${id}`} className="small-movie-card__link">{title}</Link>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: FilmTypeProps.filmCard,
  renderPlayer: PropTypes.func.isRequired,
  mouseOverHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
  filmId: PropTypes.number.isRequired
};

export default React.memo(FilmCard);
