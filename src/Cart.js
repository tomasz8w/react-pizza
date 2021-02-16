import { Paper, Typography, Grid } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Cart(props) {
    const cart = props.cart;
    const data = props.data;
    return (
        <Grid container style={{ "margin": "10px", "padding": "10px" }} direction="row" justify="center">
            <Grid item xs={12} sm={8} >
                <Paper align="center">
                    <Typography variant="h3">Cart</Typography>

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Nazwa</TableCell>
                                    <TableCell>Rozmiar</TableCell>
                                    <TableCell>Ilość</TableCell>
                                    <TableCell>Cena</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    cart.map((i) =>
                                    (
                                        <TableRow>
                                            <TableCell>{i.id}</TableCell>
                                            <TableCell>{data.filter((pizza) => pizza.id === i.id).map((pizza) => pizza.name)}</TableCell>
                                            <TableCell>{i.size}</TableCell>
                                            <TableCell>{i.quantity}</TableCell>
                                            <TableCell>
                                                {
                                                    data.filter((pizza) => pizza.id === i.id)
                                                        .map((pizza) => pizza.price[i.size]) * i.quantity
                                                }
                                                zł
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>

                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
    );
}