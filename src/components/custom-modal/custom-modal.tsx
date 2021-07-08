import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { IDocument } from '../../models/document';

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & { children?: React.ReactElement<any, any> },
   ref: React.Ref<unknown>
) {
   return <Slide direction='up' ref={ref} {...props} />;
});

interface Props {
   open: boolean;
   setOpen: (open: boolean) => void;
   document: IDocument | null;
}

export default function CustomModal({ open, setOpen, document }: Props) {
   const handleClose = () => {
      setOpen(false);
   };
   const raiseInvoiceClicked = () => {
      handleClose();
      // route to new page by changing window.location
      window.open(document?.url, '_blank'); //to open new page
   };
   return (
      <div>
         <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby='alert-dialog-slide-title'
            aria-describedby='alert-dialog-slide-description'
         >
            <DialogTitle id='alert-dialog-slide-title'>
               Firma Digital Realizada correctamente
            </DialogTitle>
            <DialogContent>
               <DialogContentText id='alert-dialog-slide-description'>
                  El Documento : <strong> {document?.documentName} </strong>
                  <br />
                  Se firmo correctamente, ¿Desea Verlo?
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button
                  onClick={raiseInvoiceClicked}
                  type={'button'}
                  variant='contained'
                  color={'primary'}
               >
                  Si
               </Button>
               <Button
                  onClick={handleClose}
                  type={'button'}
                  variant='contained'
                  color={'inherit'}
               >
                  No
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}
