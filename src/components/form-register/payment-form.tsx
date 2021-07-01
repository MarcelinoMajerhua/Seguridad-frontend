import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';

export default function PaymentForm() {
    return (
        <React.Fragment>

            <Grid container spacing={3}>
                <Grid item xs={6} md={6}>
                    <TextField
                        required
                        id='cardName'
                        label='Nombre Apellido'
                        fullWidth
                        autoComplete='cc-name'
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        required
                        id='cardNumber'
                        label='Cargo'
                        fullWidth
                        autoComplete='cc-number'
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        required
                        id='expDate'
                        label='Institución'
                        fullWidth
                        autoComplete='cc-exp'
                        variant='standard'
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        required
                        id='cvv'
                        label='Firma'
                        helperText='Combine minúscula, mayúscula y caracteres'
                        fullWidth
                        autoComplete='cc-csc'
                        variant='standard'
                        type='password'
                    />


                </Grid>
                <Grid item xs={6} md={6}>
                    <TextField
                        required
                        id='cvv'
                        label='Confirmar firma'
                        helperText='Ingrese la firma'
                        fullWidth
                        autoComplete='cc-csc'
                        variant='standard'
                        type='password'
                    />
                </Grid>

            </Grid>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button type={'button'} variant='contained' color={'primary'}>
                    Agregar
                </Button>
            </div>
        </React.Fragment>
    );
}
