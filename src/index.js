import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';

const MoviePoster = {
  TITLE: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: `2014`
};

ReactDOM.render(
    <App
      moviePoster = {MoviePoster}
    />,
    document.querySelector(`#root`)
);
