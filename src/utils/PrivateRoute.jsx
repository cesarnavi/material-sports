import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function CustomRoute({ component: Component, ...rest }) {
  // const { 
  //     redirect,
  //     authorized,
  //     path,
  //     component
  // } = props;

  // if(authorized){
  //    return  (<Redirect to={{ pathname: redirect }} />);
  // }
  console.log(rest);

  return (
    <Route
      {...rest}
      render={(props) => <Component {...props} />}
    />
  )

}