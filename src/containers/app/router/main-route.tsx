import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import MainLayout from '../../../components/dashboard/main-layout';

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
               <Route path='/dashboard' component={Dashboard} />
               <Route path='/profile' component={Profile} />
               <Route path='/register' component={Register} />
               <Route path='/file/check' component={Check} />
               <Route path='/file/sign' component={Sign} />
            </Switch>
         </MainLayout>
      </Route>
   );
}

export default MainRoute;
