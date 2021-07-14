export interface Role {
    id:string,
    name:string
}


export class roleForm {
    id:string='';
    name:string = '';

    constructor(role?: roleForm){
        if(role){
            this.id = role.id
            this.name = role.name
        }
    }
}