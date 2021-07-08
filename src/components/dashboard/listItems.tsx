import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { NavLink } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';

export const mainListItems = (
   <div>
      <ListItem component={NavLink} to={'/dashboard'} activeClassName='Mui-selected' button>
         <ListItemIcon>
            <DashboardIcon />
         </ListItemIcon>
         <ListItemText primary='Dashboard' />
      </ListItem>
   </div>
);

export const secondaryListItems = (
   <div>
      <ListSubheader inset>Admin</ListSubheader>
      <ListItem component={NavLink} to={'/register'} activeClassName='Mui-selected' button>
         <ListItemIcon>
            <span className='material-icons'>person_add</span>
         </ListItemIcon>
         <ListItemText primary='Registro' />
      </ListItem>
      <Divider />
      <ListSubheader inset>Documentos</ListSubheader>
      <ListItem component={NavLink} to={'/file/sign'} activeClassName='Mui-selected' button>
         <ListItemIcon>
            <span className='material-icons'>description</span>
         </ListItemIcon>
         <ListItemText primary='Firmar Documento' />
      </ListItem>

      <ListItem component={NavLink} to={'/file/check'} activeClassName='Mui-selected' button>
         <ListItemIcon>
            <span className='material-icons'>task_alt</span>
         </ListItemIcon>
         <ListItemText primary='Verificar Documento' />
      </ListItem>
      <Divider />
      <ListSubheader inset>Perfiles</ListSubheader>
      <ListItem component={NavLink} to={'/profile'} activeClassName='Mui-selected' button>
         <ListItemIcon>
            <span className='material-icons'>person</span>
         </ListItemIcon>
         <ListItemText primary='Perfil' />
      </ListItem>
   </div>
);
