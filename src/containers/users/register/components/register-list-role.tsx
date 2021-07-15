import React, { useEffect } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useStore } from '../../../../store/store';
import { Role } from '../../../../models/role';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         width: '100%',
         maxWidth: 360,
         backgroundColor: theme.palette.background.paper,
      },
      nested: {
         paddingLeft: theme.spacing(4),
      },
   })
);

function ListRegister() {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
   const [roles, setRoles] = React.useState<Role[]>();
   const { roleStore } = useStore();
   const [state, setState] = React.useState<string[]>([]); //contiene los permisos activaods

   useEffect(() => {
      roleStore.getRoles().then((result) => {
         setRoles(result);
      });
   }, []);

   const handleClick = () => {
      setOpen(!open);
   };

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (state.includes(event.target.value)) {
         setState(state.filter((item) => item !== event.target.value));
      } else {
         setState([...state, event.target.value]);
      }
   };

   return (
      <>
         <List component='nav' aria-labelledby='nested-list-subheader' className={classes.root}>
            <ListItem button onClick={handleClick}>
               <ListItemIcon>
                  <InboxIcon />
               </ListItemIcon>
               <ListItemText primary='Roles' />
               {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout='auto' unmountOnExit>
               <List component='div' disablePadding>
                  {roles?.map((role, index) => {
                     return (
                        <FormControlLabel
                           control={
                              <Checkbox
                                 key={index}
                                 checked={state.includes(role.id)}
                                 onChange={handleChange}
                                 value={role.id}
                                 color='primary'
                              />
                           }
                           label={role.name}
                        />
                     );
                  })}
               </List>
            </Collapse>
         </List>
      </>
   );
}

export default ListRegister;
