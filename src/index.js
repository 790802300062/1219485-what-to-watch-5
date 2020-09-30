import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app/app';

const moviePoster = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

ReactDOM.render(
    <App
      moviePoster = {moviePoster}
    />,
    document.querySelector(`#root`)
);
