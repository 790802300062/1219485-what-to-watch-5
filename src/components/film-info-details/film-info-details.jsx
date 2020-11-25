import React from "react";
import {exportToCamelCase} from "../../utils/common";
import {getFilmDurationHM} from "../../utils/date-time-formatter";
import {filmPropTypesShape} from "../../utils/props-validation";

const FilmInfoDetails = (props) => {
  const {film} = props;
  const {director, starring, genre, year, duration} = film;

  return (
    <>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {Array.isArray(starring) && starring.map((name, index)=>{

                return (
                  <React.Fragment key={`${exportToCamelCase(name)}${index}`}>
                    {name}{index < starring.length - 1 && `,`}{index < starring.length - 1 && <br/>}
                  </React.Fragment>);
              })}

            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getFilmDurationHM(duration)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{Array.isArray(genre) ? genre.join(`, `) : genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{year}</span>
          </p>
        </div>
      </div>
    </>);
};

FilmInfoDetails.propTypes = {
  film: filmPropTypesShape,
};

export default FilmInfoDetails;
