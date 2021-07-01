import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    style:{
        justifyContent:'center',
        display: 'flex',
        margin: theme.spacing(1),
    },
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
        
      },
    },
    small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
      
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      
    },
  }),
);

interface Props {
    children?: React.ReactNode;
    src:string;
}

export default function ImageAvatars({children,src}:Props) {
  const classes = useStyles();

  return (
    <div className={classes.style}  >
      <Avatar alt="Remy Sharp" src={src} className={classes.large} />
    </div>
  );
}