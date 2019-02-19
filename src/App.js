import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/login/Login.container'
import ResetPassword from './containers/resetPassword/ResetPassword.container'
import DashboardContainer from './containers/dashboard/Dashboard.container'
// import { ProtectedRoute } from './component/shared/ProtectedRoute.component'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/reset" component={ResetPassword} />
        <Route exact path="/dashboard" component={DashboardContainer} />
        {/* <Main>
        </Main> */}
      </Switch>
    );
  }
}

export default App;