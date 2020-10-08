import PropTypes from 'prop-types';

export default {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  bgPoster: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  actors: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.objectOf(PropTypes.string).isRequired
};
