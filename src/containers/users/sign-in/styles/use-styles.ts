import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      height: '100vh',
   },
   image: {
      backgroundRepeat: 'no-repeat',
      backgroundColor:
         theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
   },
   paper: {
      margin: theme.spacing(10, 15),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   avatar: {
      margin: theme.spacing(2),
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(4, 0, 2),
   },
   logo: {
      backgroundImage: 'url(https://i.postimg.cc/zDRXp4Zw/logo.png)',
      backgroundSize: '50%',
      backgroundPosition: 'center',
   },
   logoP: {
      margin: theme.spacing(10, 15),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
}));

export default useStyles;
