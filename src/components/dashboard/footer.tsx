import React from 'react';
import { Container, Link, Typography } from '@material-ui/core';
import useStyles from './styles/use-styles';

function Footer(props: any) {
   const classes = useStyles();
   return (
      <React.Fragment>
         <footer className={classes.footer}>
            <Container maxWidth='sm'>
               <Typography variant='body1' align='center'>
                  Firma Digital, Grupo 13
               </Typography>
               <Typography variant='body2' align='center' color='textSecondary'>
                  {'Copyright © '}
                  <Link color='inherit' href='#'>
                     Seguridad Informatica
                  </Link>
                  {' ' + new Date().getFullYear()}
               </Typography>
            </Container>
         </footer>
         {/*            <Typography variant='body2' color='text.secondary' align='center' {...props}>
                {'Copyright © '}
                <Link color='inherit' href='#'>
                    Sistema
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>*/}
      </React.Fragment>
   );
}

export default Footer;
