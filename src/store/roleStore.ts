import { makeAutoObservable, runInAction } from "mobx";
import { Role } from "../models/role";
import rolesServices from "../services/roles-services";

export default class RoleStore {
    roles : Role[] | null = null ;
    
    constructor(){
        makeAutoObservable(this);
    }

    getRoles = async()=>{
        try {
            const roles = await rolesServices.getAll();
            
            runInAction(()=>(this.roles=roles))

            return roles;

        } catch (e) {
            
        }
    }

}