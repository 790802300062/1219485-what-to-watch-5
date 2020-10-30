import PropTypes from "prop-types";

const reviewProps = PropTypes.shape({
  text: PropTypes.string.isRequired,
  filmRating: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
});

const reviewsListProps = PropTypes.arrayOf(reviewProps).isRequired;

const filmProps = PropTypes.shape({
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  fullSizePoster: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingDescription: PropTypes.string.isRequired,
  ratingsCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runtime: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
}).isRequired;

const filmListProps = PropTypes.arrayOf(filmProps).isRequired;

export const ReviewTypeProps = {
  reviewsList: reviewsListProps,
  review: reviewProps
};

export const FilmTypeProps = {
  films: filmListProps,
  filmCard: filmProps,
};
