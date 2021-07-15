import api from '../api/api';
import { Role } from '../models/role';

const rolesServices = {
    getAll: ()=>api.get<Role[]>('/roles')
}

export default rolesServices;