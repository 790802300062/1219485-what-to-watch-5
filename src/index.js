import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import reviews from "./mocks/reviews";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {fetchFilmList} from "./store/api-actions";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI(

);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

const movieCard = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

Promise.all([
  store.dispatch(fetchFilmList())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          movieCard={movieCard}
          reviews={reviews}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
