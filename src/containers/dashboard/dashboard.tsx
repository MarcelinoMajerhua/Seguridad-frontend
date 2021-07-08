import React from 'react';
import CustomBodyName from '../../components/body-custom/custom-body-name';
import CustomBodyDescription from '../../components/body-custom/custom-body-description';
import CustomBody from '../../components/body-custom/custom-body';

function Dashboard() {
   return (
      <React.Fragment>
         <CustomBodyName title='Nombre del Documento' height='150px'>
            Listar documentos firmados
         </CustomBodyName>
         <CustomBodyDescription title='Descripcion' height='150px'>
            Se encarga de listar los documentos firmados
         </CustomBodyDescription>
         <CustomBody>
            <div>Desde Dashboards</div>
         </CustomBody>
      </React.Fragment>
   );
}

export default Dashboard;
