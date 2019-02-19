import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { loadUserInfo } from '../../actions/localStorage.action';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (rest.isAuthenticated) {
        return <Component {...props} />
      }
      const user_token = loadUserInfo('user_token')
      const instance_token = loadUserInfo('instance_token')
      const username = loadUserInfo('username')
      if (user_token && instance_token && username) {
        return <Component {...props} />
      } else {
        return (<Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }} />)
      }
    }
    }
  />
);

const mapStateToProps = (state) => {
  return { isAuthenticated: state.authReducer.login };
};

export default withRouter(connect(mapStateToProps)(ProtectedRoute));