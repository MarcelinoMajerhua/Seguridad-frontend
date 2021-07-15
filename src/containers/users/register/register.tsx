import React from 'react';
import CustomBodyDescription from '../../../components/body-custom/custom-body-description';
import CustomBodyName from '../../../components/body-custom/custom-body-name';
import RegisterForm from './components/register-form';
import CustomCardHeader from '../../../components/custom-card/custom-card-header/custom-card-header';
import CustomBody from '../../../components/body-custom/custom-body';
import CustomCard from '../../../components/custom-card/custom-card/custom-card';
import CustomCardBody from '../../../components/custom-card/custom-card-body/custom-card-body';

function Register() {
   return (
      <React.Fragment>
         <CustomBodyName title={'Componente'} height='150px'>
            Agregar Nuevo Usuario
         </CustomBodyName>
         <CustomBodyDescription title={'Descripcion'} height={'150px'}>
            Se encarga de Agregar un Usuario
         </CustomBodyDescription>
         <CustomBody>
            <CustomCard>
               <CustomCardHeader>
                  <h3> Por favor agregue un Usuario </h3>
               </CustomCardHeader>
               <CustomCardBody>
                  <RegisterForm />
               </CustomCardBody>
            </CustomCard>
         </CustomBody>
         {/*         <CustomBodyDescription title='Datos del Usuario' height='600px'>

         </CustomBodyDescription>*/}
      </React.Fragment>
   );
}

export default Register;
