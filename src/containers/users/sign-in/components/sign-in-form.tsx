import React from 'react';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import useStyles from "../styles/use-styles";
import Typography from "@material-ui/core/Typography";

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
                </Grid>

            </form>
        </React.Fragment>
    );
}

export default SignInForm;