import React from "react";
import {FilmTypeProps} from "../../prop-types-validations";

const ACTORS_TO_SHOW_AMOUNT = 5;

const getStarringForOverviewTab = (starring) => {
  const firstFiveActors = starring.slice(0, ACTORS_TO_SHOW_AMOUNT).join(`, `);
  if (starring.length >= ACTORS_TO_SHOW_AMOUNT) {
    return `${firstFiveActors} and other`;
  }

  return firstFiveActors;
};

const FilmCardOverviewTab = (props) => {
  const {
    description,
    rating,
    ratingDescription,
    ratingsCount,
    director,
    starring,
  } = props.film;

  const starringActorsForOverviewTab = getStarringForOverviewTab(starring);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDescription}</span>
          <span className="movie-rating__count">{ratingsCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starringActorsForOverviewTab}</strong></p>
      </div>
    </>
  );
};

FilmCardOverviewTab.propTypes = {
  film: FilmTypeProps.filmCard,
};

export default FilmCardOverviewTab;
