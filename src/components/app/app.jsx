import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

import MainPage from '../main-page/main-page';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';

const App = (props) => {
  const {moviePoster} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <MainPage moviePoster={moviePoster} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/player/:id">
          <Player />
        </Route>
        <Route>
          <h1>404: Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
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
