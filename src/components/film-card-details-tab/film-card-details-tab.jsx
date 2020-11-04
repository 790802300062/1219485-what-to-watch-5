import React from "react";
import {FilmTypeProps} from "../../prop-types-validations";
import {getDurationTextInHoursAndMinutes} from "../../utils";

const getStarringActorsMarkup = (starringActors) => {
  return starringActors.map((actor, i, actors) => (
    <React.Fragment key={`actor-${i}`} >
      {actor} {i < actors.length - 1 ? <br /> : ``}
    </React.Fragment>
  ));
};

const FilmCardDetailsTab = (props) => {
  const {
    genre,
    releaseYear,
    director,
    starring,
    runtime,
  } = props.film;

  const starringActors = getStarringActorsMarkup(starring);
  const runtimeFormatted = getDurationTextInHoursAndMinutes(runtime);

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starringActors}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runtimeFormatted}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{releaseYear}</span>
        </p>
      </div>
    </div>
  );
};

FilmCardDetailsTab.propTypes = {
  film: FilmTypeProps.filmCard,
};

export default FilmCardDetailsTab;
