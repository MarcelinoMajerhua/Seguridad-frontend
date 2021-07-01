import React, {useState} from 'react';
import CustomBodyName from '../../components/body-custom/custom-body-name';
import CustomBodyDescription from '../../components/body-custom/custom-body-description';
import CustomBody from '../../components/body-custom/custom-body';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios, {AxiosResponse} from "axios";
import {IDocument} from "../../models/document";
import documentsServices from "../../services/documents-services";

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function Dashboard() {

    const [documents, setDocuments] = useState<IDocument[]>([]);

    React.useEffect(() => {
        documentsServices.list().then((data) => {
            setDocuments(data);
        });
    }, []);



    return (
        
        <React.Fragment>
            <CustomBodyName title="titulo" height="300">Subir un documento para firmarlo</CustomBodyName>
            <CustomBodyDescription title="Titulo" height="400">Se encarga</CustomBodyDescription>
            <CustomBody>
                <TableContainer component={Paper}>
                    <Table
                        style={{
                            minWidth: 650,
                        }}
                        aria-label='simple table'
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align='right'>Calories</TableCell>
                                <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                                <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                                <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component='th' scope='row'>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align='right'>{row.calories}</TableCell>
                                    <TableCell align='right'>{row.fat}</TableCell>
                                    <TableCell align='right'>{row.carbs}</TableCell>
                                    <TableCell align='right'>{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CustomBody>
        </React.Fragment>
    );
}

export default Dashboard;
