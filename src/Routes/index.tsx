import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import { useAuth } from '../hooks/auth';

const UnauthenticatedRoutes: React.FC = () => (
  <Switch>
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" exact component={SignIn} />
    <Route path="/forgot" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />
    <Route path="/" exact component={SignIn} />
    <Route path="*" component={SignIn} />
  </Switch>
);

const AuthenticatedRoutes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={Dashboard} />
  </Switch>
);

const Routes: React.FC = () => {
  const { user } = useAuth();

  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
};

export default Routes;
