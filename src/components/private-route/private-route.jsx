import PropTypes from "prop-types";
import React from "react";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import {Path} from "../../constants";
import {isUserLoggedIn} from "../../store/user/user";

const PrivateRoute = (props) => {
  const {render, path, exact, isUserAuthorized} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          isUserAuthorized
            ? render(routeProps)
            : <Redirect to={Path.SIGN_IN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isUserAuthorized: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isUserAuthorized: isUserLoggedIn(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
