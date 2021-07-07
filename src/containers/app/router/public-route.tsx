import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { useStore } from '../../../store/store';

interface Props extends RouteProps {
   component: React.ComponentType<RouteComponentProps<any> | React.ComponentType<any>>;
}
function PublicRoute({ component: Component, ...rest }: Props) {
   const {
      userStore: { isLoggedIn },
   } = useStore();
   return (
      <React.Fragment>
         <Route
            {...rest}
            render={(props) =>
               !isLoggedIn ? <Redirect to={'/login'} /> : <Redirect to={'/dashboard'} />
            }
         />
      </React.Fragment>
   );
}

export default PublicRoute;
