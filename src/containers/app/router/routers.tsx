import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../dashboard/dashboard';
import FileUpload from '../../file-upload/file-upload';
import Profile from '../../profile/profile';
import Registro from '../../registro/registro';

function Routers() {
   return (
      <React.Fragment>
         <Route exact path='/' component={Dashboard} />
         <Route exact path='/profile' component={Profile} />
         <Route exact path='/file-upload' component={FileUpload} />
         <Route exact path = '/registro' component={Registro}/>
      </React.Fragment>
   );
}

export default Routers;
