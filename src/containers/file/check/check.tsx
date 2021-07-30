
import { Button, Grid, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import CustomBody from '../../../components/body-custom/custom-body';
import CustomBodyDescription from '../../../components/body-custom/custom-body-description';
import CustomBodyName from '../../../components/body-custom/custom-body-name';
import CustomCardBody from '../../../components/custom-card/custom-card-body/custom-card-body';
import CustomCardHeader from '../../../components/custom-card/custom-card-header/custom-card-header';
import CustomCard from '../../../components/custom-card/custom-card/custom-card';
import DocumentPreview from './components/document-preview';
import DocumentWidgetDropzone from './components/document-widget-dropzone';
import DeleteIcon from '@material-ui/icons/Delete';
import ButtonLoading from '../../../components/custom-loading/button-loading';
import documentsServices from '../../../services/documents-services';
import { IUserCheck } from '../../../models/user';
import CustomModal from './custom-modal-check/custom-modal';

function Check() {
    const [document, setDocument] = React.useState<any>([]);
    const [loading, setLoading] = React.useState(false);
    const [signedDocument, setSignedDocument] = React.useState<IUserCheck | null>(null);
    const [open, setOpen] = React.useState(false);

    function deleteDocument() {
        setDocument([]);
    }

    const resetForm = () => {
        deleteDocument();
    };



    function submit() {
        if (document[0]) {
            const fileUpload = document[0];
            const formData = new FormData();
            formData.append('File', fileUpload);
            setLoading(true);
            documentsServices
                .check(formData)
                .then((response) => {
                    setLoading(false);
                    setOpen(true);
                    const document: IUserCheck = response;
                    document.documentName = fileUpload.name;
                    setSignedDocument(document);
                }).catch((err) => {
                    console.log(err)
                })
        }
    }
    return (
        <React.Fragment>
            <CustomModal open={open} setOpen={setOpen} user={signedDocument} />

            <CustomBodyName title={"Componente"} height="150px">
                Verificar Documento
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
                                    {document && document.length > 0 ? (
                                        <>
                                            <div style={{ paddingTop: '80px' }}>
                                                <Alert severity='success'>
                                                    El Documento se cargo, correctamente
                                                </Alert>
                                            </div>
                                        </>
                                    ) : (
                                        <div style={{ paddingTop: '5px' }}>
                                            <DocumentWidgetDropzone setDocument={setDocument} />
                                        </div>
                                    )}
                                </Grid>

                                <Grid item xs={12} sm={12} md={6}>
                                    {document && document.length > 0 && (
                                        <>
                                            <Paper style={{ height: '210px' }} elevation={3}>
                                                {document && document.length > 0 && (
                                                    <DocumentPreview document={document} />
                                                )}
                                            </Paper>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <Button
                                                    variant='contained'
                                                    color='secondary'
                                                    startIcon={<DeleteIcon />}
                                                    onClick={deleteDocument}
                                                >
                                                    Eliminar
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </Grid>

                                <Grid item xs={12} sm={12} md={12}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Button
                                            onClick={submit}
                                            type={'button'} 
                                            variant='contained'
                                            color={'primary'}
                                            disabled={loading || (document && document.length === 0)}
                                        >
                                            {loading && <ButtonLoading />}
                                            Compobar Documento
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

export default Check;