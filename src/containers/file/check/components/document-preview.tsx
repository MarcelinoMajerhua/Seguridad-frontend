import React from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';

interface Props {
   document: any;
}
function DocumentPreview({ document }: Props) {
   return (
      <React.Fragment>
         <div style={{ padding: '10px' }}>
            <Typography>
               <strong>Nombre del Documento:</strong>
            </Typography>
            <Typography>{document[0].name}</Typography>
         </div>
         <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Avatar
               variant={'rounded'}
               style={{
                  color: '#fff',
                  backgroundColor: green[500],
                  height: '100px',
                  width: '100px',
               }}
            >
               <AssignmentIcon style={{ fontSize: 50 }} />
            </Avatar>
         </div>
      </React.Fragment>
   );
}

export default DocumentPreview;
