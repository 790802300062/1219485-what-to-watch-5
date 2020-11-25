import PropTypes from 'prop-types';

export const filmPropTypesShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  year: PropTypes.number,
  director: PropTypes.string,
  duration: PropTypes.number,
  description: PropTypes.string,
  background: PropTypes.string,
  backgroundColor: PropTypes.string,
  poster: PropTypes.string,
  posterSmall: PropTypes.string,
  videoSrc: PropTypes.string,
  previewVideo: PropTypes.string,
  starring: PropTypes.arrayOf(PropTypes.string),
  isFavorite: PropTypes.bool
});

export const reviewPropTypesShape = PropTypes.shape({
  date: PropTypes.instanceOf(Date),
  author: PropTypes.string,
  rating: PropTypes.number,
  text: PropTypes.string,
});

export const userPropTypesShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  avatarScr: PropTypes.string,
});

