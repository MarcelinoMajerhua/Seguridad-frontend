import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { adminListItems, mainListItems, secondaryListItems } from './listItems';
import useStyles from './styles/use-styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import CustomBadgeAvatars from '../custom-badge-avatar/custom-badge-avatar';
import { useStore } from '../../store/store';
/*import mainLogo from '../../assets/images/logo/logo-unsch.png';*/
interface Props {
   open: boolean;
   toggleDrawer: () => void;
}

function Sidebar({ toggleDrawer, open }: Props) {
   /**/
   const { userStore } = useStore();
   const { user } = userStore;
   /**/
   const classes = useStyles();
   const theme = useTheme();
   const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

   return (
      <Drawer
         /*variant='permanent'*/
         /*variant={matchUpMd ? 'persistent' : 'temporary'}*/
         variant={matchUpMd ? 'permanent' : 'temporary'}
         classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
         }}
         open={open}
      >
         <div className={classes.toolbarIcon}>
            <h2 style={{ marginRight: '40px' }}>UNSCH</h2>
            {/*<img src={mainLogo} alt={'logo UNSCH'} style={{width : '200px', height:'100px'}} />*/}
            <IconButton onClick={toggleDrawer}>
               <ChevronLeftIcon />
            </IconButton>
         </div>
         <Divider />
         <CustomBadgeAvatars />
         <Divider />
         <List>{mainListItems}</List>
         <Divider />
         {!!user?.roles.find((x) => x.name === 'admin') && (
            <>
               <React.Fragment>
                  <List> {adminListItems} </List>
                  <Divider />
               </React.Fragment>
               <Divider />
            </>
         )}
         <List>{secondaryListItems}</List>
      </Drawer>
   );
}

export default Sidebar;
