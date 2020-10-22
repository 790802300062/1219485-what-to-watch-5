import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Main from "../main/main";
import AddReview from "../add-review/add-review";
import Film from "../film/film";
import Login from "../login/login";
import MyList from "../my-list/my-list";
import Player from "../player/player";
import {filmValidator, reviewValidator} from "../../props-validators/props-validators";
import {getRandomElement} from "../../utils/common";

const App = (props) => {
  const {films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            films={films}
          />
        </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/mylist" exact>
          <MyList films={films}/>
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview film={getRandomElement(films)} />
        </Route>
        <Route path="/films/:id">
          <Film films={films} reviews={reviews}/>
        </Route>
        <Route path="/player/:id" exact>
          <Player film={getRandomElement(films)}/>
        </Route>
        <Route
          render={() => (
            <React.Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </React.Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(filmValidator)),
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewValidator)),
};

export default App;
