import React from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import useStyles from '../styles/use-styles';
import CustomTextField from '../../../../components/custom-text-field/custom-text-field';

function SignInForm() {
   const classes = useStyles();
   return (
      <React.Fragment>
         <form className={classes.form} noValidate>
            <CustomTextField
               margin='normal'
               required
               label='User'
               name='User'
               autoFocus
               type={'text'}
            />
            <CustomTextField
               margin='normal'
               required
               label='Password'
               name='Password'
               autoFocus
               type={'password'}
            />
            <FormControlLabel
               control={<Checkbox value='remember' color='primary' />}
               label='Remember me'
            />
            <Button
               type='submit'
               fullWidth
               variant='contained'
               color='primary'
               className={classes.submit}
            >
               Sign In
            </Button>
            <Grid container>
               <Grid item xs>
                  <Link href='#' variant='body2'>
                     Forgot password?
                  </Link>
               </Grid>
            </Grid>
         </form>
      </React.Fragment>
   );
}

export default SignInForm;
