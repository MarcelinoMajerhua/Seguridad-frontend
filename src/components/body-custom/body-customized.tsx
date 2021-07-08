import React from 'react';
import CustomMainForm from '../form/custom-main-form';
import PaymentForm from '../form/payment-form';
import CustomBodyDescription from './custom-body-description';
import CustomBodyName from './custom-body-name';
import CustomBody from './custom-body';

function BodyCustomized() {
    return (
        <React.Fragment>
            <CustomBodyName title="titulo" height="300">Hola Mundo</CustomBodyName>

            <CustomBodyDescription title="Manda un Hola mundo" height="400">
                contenido
            </CustomBodyDescription>

            <CustomBody>
                <CustomMainForm title={'Titulo del Formulario'}>
                    {/*<TemplateForm />*/}
                    <PaymentForm />
                    {/* <Review />*/}
                </CustomMainForm>
            </CustomBody>
        </React.Fragment>
    );
}

export default BodyCustomized;
