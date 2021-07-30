import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../../../components/custom-text-field/custom-text-field';
import { Button } from '@material-ui/core';
import { UserFormValuesRegister } from '../../../../models/user';
import { Role } from '../../../../models/role';
import ListRegister from './register-list-role';
import accountsServices from '../../../../services/accounts-services';
import CustomSnackbar from '../../../../components/custom-snackbar/custom-snackbar';
import ButtonLoading from '../../../../components/custom-loading/button-loading';

function RegisterForm() {
   const [userForm, setUserForm] = useState<UserFormValuesRegister>(new UserFormValuesRegister());
   const [open, setOpen] = useState(false);
   const [loading, setLoading] = useState(false);
   const [changRole, setChangeRole] = useState(false);

   const [roles, setRoles] = useState<Role[]>([]);

   const changeValueUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { value, name } = event.target;

      setUserForm({ ...userForm, [name]: value });
   };

   useEffect(() => {
      setUserForm({ ...userForm, roles: roles });
   }, [setUserForm, roles]);

   const submit = () => {
      setLoading(true);
      console.log('this user', userForm);
      accountsServices
         .register(userForm)
         .then((response) => {
            setOpen(true);
            setLoading(false);
            console.log(response);
            setChangeRole(!changRole);
            setUserForm(new UserFormValuesRegister());
         })
         .catch((error) => {
            console.log(error);
            setLoading(false);
         });
   };

   return (
      <React.Fragment>
         <CustomSnackbar
            open={open}
            severity={'success'}
            setOpen={setOpen}
            message={'Usuario agregado correctamente'}
         />
         <form
            style={{
               marginTop: '25px',
            }}
         >
            <Grid container spacing={3}>
               <Grid item xs={12} md={12}>
                  <CustomTextField
                     required
                     label='Nombre Completo'
                     name='fullName'
                     value={userForm.fullName}
                     onChange={(event) => changeValueUser(event)}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} md={12}>
                  <CustomTextField
                     required
                     label='Apellidos'
                     name='lastName'
                     value={userForm.lastName}
                     onChange={(event) => changeValueUser(event)}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={6} md={6}>
                  <CustomTextField
                     required
                     label='Nombre de Usuario'
                     name='userName'
                     value={userForm.userName}
                     onChange={(event) => changeValueUser(event)}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={6} md={6}>
                  <CustomTextField
                     required
                     name='email'
                     value={userForm.email}
                     onChange={(event) => changeValueUser(event)}
                     label='Correo Electronico'
                  />
               </Grid>
               <Grid item xs={6} md={6}>
                  <CustomTextField
                     required
                     name='dni'
                     value={userForm.dni}
                     onChange={(event) => changeValueUser(event)}
                     label='Dni'
                  />
               </Grid>
               <Grid item xs={6} md={6}>
                  <CustomTextField
                     required
                     name='position'
                     value={userForm.position}
                     onChange={(event) => changeValueUser(event)}
                     label='Posicion'
                  />
               </Grid>
               <Grid item xs={6} md={6}>
                  <CustomTextField
                     required
                     label='Contraseña'
                     fullWidth
                     name='password'
                     value={userForm.password}
                     onChange={(event) => changeValueUser(event)}
                     type='password'
                  />
               </Grid>
               <Grid item xs={6} md={6}>
                  <CustomTextField
                     required
                     label='Confirmar contraseña'
                     fullWidth
                     name='confirmPassword'
                     value={userForm.confirmPassword}
                     onChange={(event) => changeValueUser(event)}
                     type='password'
                  />
               </Grid>
               <Grid item xs={12} md={12}>
                  <ListRegister changRole={changRole} rolesT={roles} setRolesT={setRoles} />
               </Grid>
               <Grid item xs={12} md={12}>
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                     <Button
                        disabled={loading}
                        type={'button'}
                        variant='contained'
                        onClick={submit}
                        color={'primary'}
                     >
                        {loading && <ButtonLoading />}
                        Agregar
                     </Button>
                  </div>
               </Grid>
            </Grid>
         </form>
      </React.Fragment>
   );
}

export default RegisterForm;
