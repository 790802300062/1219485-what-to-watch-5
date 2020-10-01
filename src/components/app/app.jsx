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
  moviePoster: PropTypes.object.isRequired
};

export default App;
