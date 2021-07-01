import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/use-styles';
import CustomTextField from '../../../../components/custom-text-field/custom-text-field';
import { UserFormValues } from '../../../../models/user';
import { useStore } from '../../../../store/store';
import Alert from '@material-ui/lab/Alert';
import ButtonLoading from '../../../../components/custom-loading/button-loading';
import { observer } from 'mobx-react-lite';

const user: UserFormValues = {
   dni: '73062536',
   password: 'password',
};

function SignInForm() {
   const classes = useStyles();
   const { userStore } = useStore();
   const [userForm, setUserForm] = useState<UserFormValues>(new UserFormValues(user));
   const [errors, setErrors] = useState('');

   function submit() {
      userStore.login(userForm).catch((error) => {
         setErrors('Usuario o contraseña invalidos');
      });
   }

   return (
      <React.Fragment>
         <form className={classes.form} noValidate>
            <CustomTextField
               margin='normal'
               required
               label='Dni'
               name='dni'
               autoFocus
               value={userForm.dni}
               type={'text'}
            />
            <CustomTextField
               margin='normal'
               required
               label='Password'
               name='password'
               value={userForm.password}
               type={'password'}
            />

            {/*           <FormControlLabel
               control={<Checkbox value='remember' color='primary' />}
               label='Remember me'
            />*/}
            {errors !== '' && <Alert severity='error'> {errors} </Alert>}
            <Button
               type={'button'}
               fullWidth
               variant='contained'
               color='primary'
               className={classes.submit}
               onClick={submit}
               disabled={userStore.loading}
            >
               Sign In
               {userStore.loading && <ButtonLoading />}
            </Button>
            {/*            <Grid container>
               <Grid item xs>
                  <Link href='#' variant='body2'>
                     Forgot password?
                  </Link>
               </Grid>
            </Grid>*/}
         </form>
      </React.Fragment>
   );
}

export default observer(SignInForm);
