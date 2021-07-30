import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { IUserCheck } from '../../../../models/user';

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & { children?: React.ReactElement<any, any> },
   ref: React.Ref<unknown>
) {
   return <Slide direction='up' ref={ref} {...props} />;
});

interface Props {
   open: boolean;
   setOpen: (open: boolean) => void;
   user: IUserCheck | null;
}

export default function CustomModal({ open, setOpen, user }: Props) {
   const handleClose = () => {
      setOpen(false);
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
            {user?.dni ? (
               <>
                  <DialogTitle id='alert-dialog-slide-title'>
                     El documento fue firmado por:
                  </DialogTitle>

                  <DialogContent>
                     <DialogContentText id='alert-dialog-slide-description'>
                        Nombre documento : <strong> {user?.documentName} </strong>
                        <br />
                        Nombre: <strong> {user?.fullName} </strong>
                        <br />
                        Dni: <strong> {user?.dni} </strong>
                        <br />
                        Email: <strong> {user?.email} </strong>
                        <br />
                        Cargo: <strong> {user?.position} </strong>
                     </DialogContentText>
                  </DialogContent>

                  <DialogActions>
                     <Button
                        onClick={handleClose}
                        type={'button'}
                        variant='contained'
                        color={'primary'}
                     >
                        Aceptar
                     </Button>
                  </DialogActions>
               </>
            ) : (
               <>
                  <DialogTitle id='alert-dialog-slide-title'>
                     El documento ha sido alterado o no fue firmado con este plataforma.
                  </DialogTitle>

                  <DialogActions>
                     <Button
                        onClick={handleClose}
                        type={'button'}
                        variant='contained'
                        color={'inherit'}
                     >
                        Salir
                     </Button>
                  </DialogActions>
               </>
            )}
         </Dialog>
      </div>
   );
}
