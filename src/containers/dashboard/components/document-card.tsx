import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imgDocument from '../../../assets/images/document.jpg';
import { IDocument } from '../../../models/document';
import axios from 'axios';
import ButtonLoading from '../../../components/custom-loading/button-loading';
const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
});

interface Props {
   document: IDocument;
}

export default function DocumentCard({ document: tempDocument }: Props) {
   const classes = useStyles();

   const [loading, setLoading] = React.useState(false);
   const onDownloadDocument = () => {
      let enlace = tempDocument.url;
      setLoading(true);
      axios
         .get(enlace, {
            responseType: 'blob',
         })
         .then((response: any) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${tempDocument.title}.pdf`);
            document.body.appendChild(link);
            link.click();
            setLoading(false);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <Card className={classes.root}>
         <CardActionArea>
            <CardMedia
               component='img'
               alt='Contemplative Reptile'
               height='140'
               image={imgDocument}
               title='Contemplative Reptile'
            />
            <CardContent>
               <Typography gutterBottom variant='h5' component='h2'>
                  {tempDocument.title}
               </Typography>
               <Typography variant='body2' color='textSecondary' component='p'>
                  {tempDocument.affair}
               </Typography>
            </CardContent>
         </CardActionArea>
         <CardActions>
            <Button
               type={'button'}
               variant='contained'
               onClick={onDownloadDocument}
               size='small'
               color='primary'
               disabled={loading}
            >
               Descargar
               {loading && <ButtonLoading />}
            </Button>
            <Button size='small' color='primary'>
               Detalles
            </Button>
         </CardActions>
      </Card>
   );
}
