import React from 'react';
import CustomBodyName from '../../components/body-custom/custom-body-name';
import CustomBodyDescription from '../../components/body-custom/custom-body-description';
import CustomBody from '../../components/body-custom/custom-body';
import documentsServices from '../../services/documents-services';
import { IDocument } from '../../models/document';
import DocumentCard from './components/document-card';
import BodyLoading from '../../components/custom-loading/body-loading';
import { Grid, Typography } from '@material-ui/core';
import notDocument from '../../assets/images/not-document.jpg';

function Dashboard() {
   const [documents, setDocuments] = React.useState<IDocument[]>([]);
   const [initialLoading, setInitialLoading] = React.useState(false);
   React.useEffect(() => {
      setInitialLoading(true);
      documentsServices
         .list()
         .then((response) => {
            setDocuments(response);
            setInitialLoading(false);
         })
         .then((error) => {
            console.log(error);
         });
   }, []);

   return initialLoading ? (
      <BodyLoading />
   ) : (
      <React.Fragment>
         <CustomBodyName title='Nombre del Documento' height='150px'>
            Listar documentos firmados
         </CustomBodyName>
         <CustomBodyDescription title='Descripcion' height='150px'>
            Se encarga de listar los documentos firmados
         </CustomBodyDescription>
         <CustomBody>
            {documents.length === 0 ? (
               <>
                  <Typography align={'center'} variant={'h5'} color={'primary'}>
                     Aun no tiene ningun documento firmado
                  </Typography>
                  <img alt={''} src={notDocument} style={{ width: '100%', height: '100%' }} />
               </>
            ) : (
               <Grid container spacing={3}>
                  {documents?.map((document) => (
                     <Grid key={document.id} item xs={4} md={4}>
                        <DocumentCard document={document} />
                     </Grid>
                  ))}
               </Grid>
            )}
         </CustomBody>
      </React.Fragment>
   );
}

export default Dashboard;
