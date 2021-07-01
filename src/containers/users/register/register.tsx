import { Button } from '@material-ui/core';
import React from 'react';
import ImageAvatars from '../../../components/avatar/avatar';
import CustomBodyDescription from '../../../components/body-custom/custom-body-description';
import CustomBodyName from '../../../components/body-custom/custom-body-name';
import PaymentForm from '../../../components/form-register/payment-form';

function Register() {
    return (
        <React.Fragment>
            <CustomBodyName title="Foto" height="300" >
                <ImageAvatars src="https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg">
                </ImageAvatars>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type={'button'} variant='contained' color={'primary'}>
                        Subir foto
                    </Button>
                </div>
            </CustomBodyName>

            <CustomBodyDescription title="Datos del firmante" height="400">
                <PaymentForm />
            </CustomBodyDescription>
        </React.Fragment>

    )
}

export default Register;
