import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {Provider} from "react-redux";
import rootReducer from "./store/reducers/root-reducer";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {checkAuth} from "./store/api-actions";
import {requireAuthorization} from "./store/actions";
import {AuthorizationStatus} from "./constants";
import {composeWithDevTools} from "redux-devtools-extension";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect)
    )
);

const movieCard = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
};

Promise.all([
  store.dispatch(checkAuth())
])
.then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <App
          movieCard={movieCard}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
});
