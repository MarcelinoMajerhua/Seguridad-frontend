export interface User {
   id: string;
   email: string;
   username: string;
   token: string;
   lastName: string;
   fullName: string;
   position: string;
   dni: string;
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

export class UserFormValuesRegister {
   userName: string='';
   dni:string='';
   email:string='';
   password:string='';
   confirmPassword:string='';
   position:string='';
   lastName:string='';
   fullName:string='';
   roles: string[]=[];

   constructor(user?: UserFormValuesRegister){
      if(user){
         this.userName=user.userName;
         this.dni= user.dni;
         this.email= user.email;
         this.password= user.password;
         this.confirmPassword= user.confirmPassword;
         this.position=user.position;
         this.lastName= user.lastName;
         this.fullName= user.fullName;
         this.roles = user.roles;

      }
   }
}