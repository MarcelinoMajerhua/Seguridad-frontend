import React, { lazy } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';

/*const NotFound = lazy(() => import('../../errors/not-found'));*/
const ServerError = lazy(() => import('../../errors/server-error'));

function ErrorsRoute() {
   const location = useLocation();
   return (
      <React.Fragment>
         {/*<Route>
            <Switch location={location} key={location.pathname}>
               <Route component={NotFound} />
            </Switch>
         </Route>*/}
         <Route path={['server-error']}>
            <Switch location={location} key={location.pathname}>
               <Route path={'/server-error'} component={ServerError} />
            </Switch>
         </Route>
      </React.Fragment>
   );
}

export default ErrorsRoute;
