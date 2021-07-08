import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useStore } from '../../store/store';

const StyledBadge = withStyles((theme: Theme) =>
   createStyles({
      badge: {
         backgroundColor: '#44b700',
         color: '#44b700',
         boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
         '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
         },
      },
      '@keyframes ripple': {
         '0%': {
            transform: 'scale(.8)',
            opacity: 1,
         },
         '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
         },
      },
   })
)(Badge);

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         display: 'flex',
         '& > *': {
            margin: theme.spacing(1),
         },
      },
   })
);

export default function CustomBadgeAvatars() {
   /**/
   const { userStore } = useStore();
   const { user } = userStore;
   /**/
   const classes = useStyles();

   return (
      <div className={classes.root}>
         <StyledBadge
            overlap='circle'
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right',
            }}
            variant='dot'
         >
            <Avatar
               style={{ width: '37px', height: '37px', marginTop: '20px' }}
               alt={user?.fullName[0]}
               src='/static/images/avatar/1.jpg'
            />
         </StyledBadge>
         <div
            style={{
               marginTop: '20px',
               marginLeft: '20px',
            }}
         >
            <Typography>
               <strong>Hola, {user?.fullName}</strong>
            </Typography>
            <Typography>
               <small>{user?.position}</small>
            </Typography>
         </div>
      </div>
   );
}
