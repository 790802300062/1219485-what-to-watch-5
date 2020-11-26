import React from "react";
import PropTypes from 'prop-types';
import {splitArrayToSegments} from "../../utils/common";
import {getDateAndTime, getReviewDateMDY} from "../../utils/date-time-formatter";
import {reviewPropTypesShape} from "../../utils/props-validation";

const REVIEWS_COLUMNS_AMOUNT = 2;

const splitReviewsToColumns = (reviews, columnsAmount) => {
  return splitArrayToSegments(reviews, columnsAmount);
};

const FilmInfoReviews = (props) => {
  const {reviews} = props;
  const reviewsByColumns = splitReviewsToColumns(reviews, REVIEWS_COLUMNS_AMOUNT);

  return (
    <>
      <div className="movie-card__reviews movie-card__row">
        {reviewsByColumns.map((items, index)=>{

          return (
            <div className="movie-card__reviews-col" key={`column-` + index}>
              {items.map((item)=>{
                const {id: reviewId, date, text, author, rating} = item;

                return (
                  <div className="review" key={reviewId}>
                    <blockquote className="review__quote">
                      <p className="review__text">{text}</p>

                      <footer className="review__details">
                        <cite className="review__author">{author}</cite>
                        <time className="review__date" dateTime={getDateAndTime(date)}>{getReviewDateMDY(date)}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{rating}</div>
                  </div>
                );
              })}
            </div>);
        })}
      </div>
    </>);
};

FilmInfoReviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypesShape).isRequired
};

export default FilmInfoReviews;
