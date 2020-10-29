import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import films from "./mocks/films";
import reviews from "./mocks/reviews";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "./store/reducer";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

const movieCard = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

ReactDOM.render(
  <Provider store={store}>
    <App
      movieCard={movieCard}
      films={films}
      reviews={reviews}
    />
  </Provider>,
  document.querySelector(`#root`)
);
