import React from 'react';
import { Divider, Grid, Paper, Typography } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    title:string;
    height:string;
}

function CustomBodyDescription({ children,title,height }: Props) {
    return (
        <Grid item xs={12} md={4} lg={7}>
            <Paper
                style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: height,
                }}
            >
                <Typography variant='h5'>{title}</Typography>
                <Divider />

                <Typography style={{ marginTop: '10px' }} variant='body2'>
                    {children}
                </Typography>
            </Paper>
        </Grid>
    );
}

export default CustomBodyDescription;
