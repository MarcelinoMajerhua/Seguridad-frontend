import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';


const SignIn = lazy(() => import('../../users/sign-in/sign-in'));

function LoginRoute() {
   const location = useLocation();
   return (
      <Route path={['/login']}>
         <Switch location={location} key={location.pathname}>
            <Route path='/login' component={SignIn} />
         </Switch>
      </Route>
   );
}

export default LoginRoute;
