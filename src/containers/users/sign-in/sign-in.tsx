import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import useStyles from './styles/use-styles';
import SignInForm from './components/sign-in-form';

//import Image from 'material-ui-image'

export default function SignIn() {
   const classes = useStyles();

   return (
      <Grid container component='main' className={classes.root}>
         <CssBaseline />
         <Grid item xs={false} sm={4} md={8} className={classes.image}>
            <img
               alt={''}
               src={'https://i.postimg.cc/Y2X7r4Ns/logo-unsch-integrantes.png'}
               style={{ width: '100%', height: '100%' }}
            />
         </Grid>
         <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
            <div className={classes.paper}>
               <Typography component='h1' variant='h5'>
                  Inicio de sesión
               </Typography>
               <img
                  style={{
                     width: '90px',
                     height: '40',
                  }}
                  src='https://i.postimg.cc/zDRXp4Zw/logo.png'
                  alt={'logo-unsch'}
               />
               <SignInForm />
            </div>
            {/* <Typography align="center">
                        <img src="https://i.postimg.cc/zDRXp4Zw/logo.png" height="300"  width="250"/>
                </Typography>*/}
         </Grid>
      </Grid>
   );
}
