import React, {lazy} from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import MainLayout from "../../../components/dashboard/main-layout";

const Dashboard = lazy(() => import('../../dashboard/dashboard'))
const Profile = lazy(() => import('../../profile/profile'))
const FileUpload = lazy(() => import('../../file-upload/file-upload'))

function MainRoute() {
   const location = useLocation();
   return (
      <Route path={['/dashboard', '/profile', '/file-upload']}>
         <MainLayout>
            <Switch location={location} key={location.pathname}>
               <Route path='/dashboard' component={Dashboard} />
               <Route path='/profile' component={Profile} />
               <Route path='/file-upload' component={FileUpload} />
            </Switch>
         </MainLayout>
      </Route>
   );
}

export default MainRoute;
