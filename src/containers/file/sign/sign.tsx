import React from 'react';
import CustomBodyName from '../../../components/body-custom/custom-body-name';
import CustomBodyDescription from '../../../components/body-custom/custom-body-description';
import CustomBody from '../../../components/body-custom/custom-body';
import CustomCard from '../../../components/custom-card/custom-card/custom-card';
import CustomCardHeader from '../../../components/custom-card/custom-card-header/custom-card-header';
import CustomCardBody from '../../../components/custom-card/custom-card-body/custom-card-body';
import { Avatar, Button, Grid, Paper, Typography } from '@material-ui/core';
import CustomTextField from '../../../components/custom-text-field/custom-text-field';
import DocumentWidgetDropzone from './components/document-widget-dropzone';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { green } from '@material-ui/core/colors';

function Sign() {
   const [document, setDocument] = React.useState<any>([]);
   return (
      <React.Fragment>
         <CustomBodyName title={'Componente'} height='150px'>
            Firmar Documento
         </CustomBodyName>
         <CustomBodyDescription title={'Descripcion'} height={'150px'}>
            Se encarga de Firmar el Documento
         </CustomBodyDescription>
         <CustomBody>
            <CustomCard>
               <CustomCardHeader>
                  <h3> Por favor agregue su documento </h3>
               </CustomCardHeader>
               <CustomCardBody>
                  <form
                     style={{
                        marginTop: '25px',
                     }}
                  >
                     <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={6}>
                           <CustomTextField label={'Asunto'} name={'affair'} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                           <CustomTextField label={'Titulo'} name={'title'} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                           <div style={{ paddingTop: '5px' }}>
                              <DocumentWidgetDropzone setDocument={setDocument} />
                           </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                           <Paper style={{ height: '210px' }} elevation={3}>
                              {document && document.length > 0 && (
                                 <>
                                    <div style={{ padding: '10px' }}>
                                       <Typography>
                                          <strong>Nombre del Documento:</strong>
                                       </Typography>
                                       <Typography>{document[0].name}</Typography>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                       <Avatar
                                          variant={'rounded'}
                                          style={{
                                             color: '#fff',
                                             backgroundColor: green[500],
                                             height: '100px',
                                             width: '100px',
                                          }}
                                       >
                                          <AssignmentIcon style={{ fontSize: 50 }} />
                                       </Avatar>
                                    </div>
                                 </>
                              )}
                           </Paper>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12}>
                           <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                              <Button type={'button'} variant='contained' color={'primary'}>
                                 Firmar Documento
                              </Button>
                           </div>
                        </Grid>
                     </Grid>
                  </form>
               </CustomCardBody>
            </CustomCard>
         </CustomBody>
      </React.Fragment>
   );
}

export default Sign;
