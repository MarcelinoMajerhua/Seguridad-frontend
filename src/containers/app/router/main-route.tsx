import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import MainLayout from '../../../components/dashboard/main-layout';
import PrivateRoute from './private-route';

const Dashboard = lazy(() => import('../../dashboard/dashboard'));
const Profile = lazy(() => import('../../profile/profile'));
const Register = lazy(() => import('../../users/register/register'));
const Check = lazy(() => import('../../file/check/check'));
const Sign = lazy(() => import('../../file/sign/sign'));

function MainRoute() {
   const location = useLocation();
   return (
      <Route
         path={['/dashboard', '/profile', '/file-upload', '/register', '/file/check', '/file/sign']}
      >
         <MainLayout>
            <Switch location={location} key={location.pathname}>
               <PrivateRoute path='/dashboard' component={Dashboard} />
               <PrivateRoute path='/profile' component={Profile} />
               <PrivateRoute path='/register' component={Register} />
               <PrivateRoute path='/file/check' component={Check} />
               <PrivateRoute path='/file/sign' component={Sign} />
            </Switch>
         </MainLayout>
      </Route>
   );
}

export default MainRoute;
