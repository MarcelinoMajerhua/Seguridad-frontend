import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link, NavLink } from 'react-router-dom';

export const mainListItems = (
   <div>
      <ListItem button>
         <ListItemIcon>
            <DashboardIcon />
         </ListItemIcon>
         <ListItemText primary='Dashboard' />
      </ListItem>
   </div>
);

export const secondaryListItems = (
   <div>
      <ListSubheader inset>Utilidades</ListSubheader>
      <ListItem component={NavLink}  to={"/registro"} activeClassName='Mui-selected' button>
         <ListItemIcon>
            <AssignmentIcon />
         </ListItemIcon>
         <ListItemText primary='Registro' />
      </ListItem>
      <ListItem button>
         <ListItemIcon>
            <AssignmentIcon />
         </ListItemIcon>
         <ListItemText primary='Firmar Documento' />
      </ListItem>
      <ListItem button>
         
         <ListItemIcon>
            <AssignmentIcon />
         </ListItemIcon>
         <ListItemText primary='Verificar Documento' />
      </ListItem>
      <ListItem button>
         <ListItemIcon>
            <AssignmentIcon />
         </ListItemIcon>
         <ListItemText primary='Perfil' />
      </ListItem>

   </div>
);
