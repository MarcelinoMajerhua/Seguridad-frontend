import { User, UserFormValues } from '../models/user';
import { makeAutoObservable, runInAction } from 'mobx';
import { store } from './store';
import { history } from '../index';
import accountsServices from '../services/accounts-services';

export default class UserStore {
   user: User | null = null;
   loading = false;

   constructor() {
      makeAutoObservable(this);
   }

   get isLoggedIn() {
      return !!this.user;
   }

   login = async (creds: UserFormValues) => {
      this.loading = true;

      try {
         const user = await accountsServices.login(creds);
         store.commonStore.setToken(user.token);
         runInAction(() => {
            this.user = user;
            this.loading = false;
         });
         history.push('/dashboard');
         /*store.modalStore.closeModal();*/
      } catch (e) {
         runInAction(() => {
            this.loading = false;
         });
         throw e;
      }
   };

   logout = () => {
      store.commonStore.setToken(null);
      window.localStorage.removeItem('jwt');
      this.user = null;
      history.push('/');
   };

   getUser = async () => {
      try {
         const user = await accountsServices.current();
         runInAction(() => (this.user = user));
      } catch (e) {}
   };

   /*    register = async (creds: UserFormValuesRegister)=>{
       try{
          const user = await accountsServices.register(creds);
          runInAction(()=>(this.user = user))

       }catch(e){
          throw e;
       }
    }*/
}
