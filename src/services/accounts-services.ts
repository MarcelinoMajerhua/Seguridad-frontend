import { User, UserFormValues } from '../models/user';
import api from '../api/api';

const accountsServices = {
   current: () => api.get<User>('/users'),
   login: (user: UserFormValues) => api.post<User>('/accounts/login', user),
};

export default accountsServices;
