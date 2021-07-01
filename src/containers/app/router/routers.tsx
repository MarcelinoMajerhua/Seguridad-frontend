import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import BodyLoading from '../../../components/custom-loading/body-loading';
import LoginRoute from './login-route';
import MainRoute from './main-route';
import DefaultPath from './default-path';
import ErrorsRoute from './errors-route';

function Routers() {
   return (
      <React.Suspense fallback={<BodyLoading />}>
         <Switch>
            <Redirect exact from='/' to={DefaultPath} />
            <>
               <LoginRoute />
               <MainRoute />
               <ErrorsRoute />
            </>
         </Switch>
      </React.Suspense>
   );
}

export default Routers;
