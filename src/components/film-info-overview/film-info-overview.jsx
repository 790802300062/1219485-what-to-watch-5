import React from "react";
import PropTypes from 'prop-types';
import {getAverageRating, getRatingDescription} from "../../utils/films";
import {SHORT_LIST_STARRING_AMOUNT} from "../../constants";
import {filmPropTypesShape, reviewPropTypesShape} from "../../utils/props-validation";

const getShortStarringInLine = (starring)=>{
  if (Array.isArray(starring)) {
    return starring.slice(0, SHORT_LIST_STARRING_AMOUNT).join(`, `);
  }

  return starring;
};

const FilmInfoOverview = (props) => {
  const {film, reviews} = props;
  const {director, starring, description} = film;

  const averageRating = getAverageRating(reviews);
  const rewiewsCount = reviews.length;
  const ratingDescription = getRatingDescription(reviews);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{averageRating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDescription}</span>
          <span className="movie-rating__count">{rewiewsCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {getShortStarringInLine(starring)} and other</strong></p>
      </div>
    </>);
};

FilmInfoOverview.propTypes = {
  film: filmPropTypesShape,
  reviews: PropTypes.arrayOf(reviewPropTypesShape).isRequired,
};

export default FilmInfoOverview;
