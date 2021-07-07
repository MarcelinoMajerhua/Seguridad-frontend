import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/use-styles';
import CustomTextField from '../../../../components/custom-text-field/custom-text-field';
import { UserFormValues } from '../../../../models/user';
import { useStore } from '../../../../store/store';
import Alert from '@material-ui/lab/Alert';
import ButtonLoading from '../../../../components/custom-loading/button-loading';
import { observer } from 'mobx-react-lite';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';
import { Link } from '@material-ui/core';


const user: UserFormValues = {
   dni: '73062536',
   password: 'password',
};

function SignInForm() {
    const classes = useStyles();
    return (
        
        <React.Fragment>
            <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Correo electrónico"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Recordar cuenta"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    INGRESAR
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"¿No tienes una cuenta? Regístrate"}
                        </Link>
                    </Grid>

                </Grid><br></br><br />
                             
            </form>
        </React.Fragment>
     
    );
}

export default observer(SignInForm);
