import React from "react";
import {ReviewTypeProps} from "../../prop-types-validations";
import {formatDate} from "../../utils";

const FilmCardReviewTab = (props) => {
  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, id) => (
          <div key={`review-${id}`} className="review">
            <blockquote className="review__quote">
              <p className="review__text">{review.text}</p>

              <footer className="review__details">
                <cite className="review__author">{review.userName}</cite>
                <time className="review__date" dateTime="2016-12-24">{formatDate(review.date)}</time>
              </footer>
            </blockquote>

            <div className="review__rating">{review.filmRating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

FilmCardReviewTab.propTypes = {
  reviews: ReviewTypeProps.reviewsList,
};

export default FilmCardReviewTab;
