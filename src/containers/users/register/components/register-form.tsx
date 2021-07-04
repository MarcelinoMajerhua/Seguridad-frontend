import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomTextField from '../../../../components/custom-text-field/custom-text-field';
import { Button } from '@material-ui/core';

function RegisterForm() {
   return (
      <React.Fragment>
         <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
               <CustomTextField required label='Nombre Completo' fullWidth />
            </Grid>
            <Grid item xs={12} md={12}>
               <CustomTextField required label='Apellidos' fullWidth />
            </Grid>
            <Grid item xs={12} md={12}>
               <CustomTextField required label='Nombre de Usuario' fullWidth />
            </Grid>
            <Grid item xs={12} md={12}>
               <CustomTextField required label='Correo Electronico' />
            </Grid>
            <Grid item xs={6} md={6}>
               <CustomTextField required label='Dni' />
            </Grid>
            <Grid item xs={6} md={6}>
               <CustomTextField required label='Posicion' />
            </Grid>
            <Grid item xs={6} md={6}>
               <CustomTextField required label='Contraseña' fullWidth type='password' />
            </Grid>
            <Grid item xs={6} md={6}>
               <CustomTextField required label='Confirmar contraseña' fullWidth type='password' />
            </Grid>
         </Grid>
         <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <Button type={'button'} variant='contained' color={'primary'}>
               Agregar
            </Button>
         </div>
      </React.Fragment>
   );
}

export default RegisterForm;
