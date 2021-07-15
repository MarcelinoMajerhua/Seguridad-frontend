import { User, UserFormValues, UserFormValuesRegister } from '../models/user';
import api from '../api/api';

const accountsServices = {
   current: () => api.get<User>('/users'),
   login: (user: UserFormValues) => api.post<User>('/accounts/login', user),
   register : (user: UserFormValuesRegister)=>api.post<User>('/users/register',user),
};

export default accountsServices;
