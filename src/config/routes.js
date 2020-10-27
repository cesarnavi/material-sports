/* eslint-disable react/jsx-key */
import React, { lazy } from 'react';
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute';
import { Route } from 'react-router-dom';
import PublicRoute from '../utils/PublicRoute';
import PrivateRoute from '../utils/PrivateRoute';

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About'))
const Home = lazy(() => import('../pages/Home/Home'))
const DialogDemo = lazy(() => import('../pages/DialogDemo/DialogDemo'))
const ToastDemo = lazy(() => import('../pages/ToastDemo/ToastDemo'))
const FilterDemo = lazy(() => import('../pages/FilterDemo'))
const ListPageDemo = lazy(() => import('../pages/ListPageDemo'))
const TabsDemo = lazy(() => import('../pages/TabsDemo'))

const routes = [
  <PublicRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <PublicRoute path="/signup" redirectTo="/" exact component={SignUp} />,
  <PublicRoute
    path="/password_reset"
    redirectTo="/"
    exact
    component={PasswordReset}
  />,
  <Route path="/about" exact component={About} />,
  <PrivateRoute path="/home" exact component={Home} />,
  <PrivateRoute path="/dialog_demo" exact component={DialogDemo} />,
  <PrivateRoute path="/toast_demo" exact component={ToastDemo} />,
  <PrivateRoute path="/filter_demo" exact component={FilterDemo} />,
  <PrivateRoute path="/list_page_demo" exact component={ListPageDemo} />,
  <PrivateRoute path="/tabs_demo" exact component={TabsDemo} />,
]

export default routes
