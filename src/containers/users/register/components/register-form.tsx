import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../../../components/custom-text-field/custom-text-field';
import { Button } from '@material-ui/core';
import { useStore } from '../../../../store/store';
import { UserFormValuesRegister } from '../../../../models/user';

import { Role, roleForm } from '../../../../models/role';
import ListRegister from './register-list-role';

function RegisterForm() {
   const { userStore } = useStore();

   const [userForm, setUserForm] = useState<UserFormValuesRegister>(new UserFormValuesRegister());

   const [errors, setErrors] = useState('');

   const [roles, setRoles] = useState<Role[]>([]);

   const changeValueUser = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { value, name } = event.target;

      setUserForm({ ...userForm, [name]: value });
   };

   const submit = () => {
      console.log(roles);
      /*userStore.register(userForm).catch(() => {
         setErrors('El usuario no ha sido registrado');
      });*/
   };

   return (
      <React.Fragment>
         {/*
         {errors !== '' && <Alert severity='error'> {errors} </Alert>}
*/}
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
                  <ListRegister rolesT={roles} setRolesT={setRoles} />
               </Grid>
               <Grid item xs={12} md={12}>
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                     <Button type={'button'} variant='contained' onClick={submit} color={'primary'}>
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
