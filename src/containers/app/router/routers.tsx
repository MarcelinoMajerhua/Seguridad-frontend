import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import BodyLoading from '../../../components/custom-loading/body-loading';
import LoginRoute from './login-route';
import MainRoute from './main-route';
import DefaultPath from './default-path';
import ErrorsRoute from './errors-route';
import { useStore } from '../../../store/store';
import { observer } from 'mobx-react-lite';

function Routers() {
   const { commonStore, userStore } = useStore();

   React.useEffect(() => {
      if (commonStore.token) {
         userStore.getUser().finally(() => commonStore.setAppLoaded());
      } else {
         commonStore.setAppLoaded();
      }
   }, [commonStore, userStore]);

   if (!commonStore.appLoaded) return <BodyLoading />;

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

export default observer(Routers);
