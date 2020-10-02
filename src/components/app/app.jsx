import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {moviePoster} = props;

  return (
    <MainPage
      moviePoster={moviePoster}
    />
  );
};

App.propTypes = {
  moviePoster: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
};

export default App;
