import React from 'react';
import ImageAvatars from '../../../components/avatar/avatar';
import CustomBodyDescription from '../../../components/body-custom/custom-body-description';
import CustomBodyName from '../../../components/body-custom/custom-body-name';
import ListDocuments from '../../../components/documents/list-documents';


function Check() {
    return (
        <React.Fragment>
            <CustomBodyName title="Datos del firmante" height="300" >
                <ImageAvatars src="https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg">
                </ImageAvatars>
            </CustomBodyName>

            <CustomBodyDescription title="Verificar Documentos firmados" height="400">
                <ListDocuments />
                
            </CustomBodyDescription>
        </React.Fragment>

    )
}

export default Check;