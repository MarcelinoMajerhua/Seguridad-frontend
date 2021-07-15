export interface User {
   id: string;
   email: string;
   username: string;
   token: string;
   lastName: string;
   fullName: string;
   position: string;
   dni: string;
   roles: Role[];
}

interface Role {
   name: string;
}

export class UserFormValues {
   dni: string = '';
   password: string = '';
   constructor(user?: UserFormValues) {
      if (user) {
         this.dni = user.dni;
         this.password = user.password;
      }
   }
}
