import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import PublicRoute from './public-route';

const SignIn = lazy(() => import('../../users/sign-in/sign-in'));

function LoginRoute() {
   const location = useLocation();
   return (
      <Route path={['/login']}>
         <Switch location={location} key={location.pathname}>
            <PublicRoute path='/login' component={SignIn} />
         </Switch>
      </Route>
   );
}

export default LoginRoute;
