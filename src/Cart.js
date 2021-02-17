import { Paper, Typography, Grid, makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
}));

export default function Cart(props) {
  const cart = props.cart;
  const data = props.data;
  const changeQuantity = props.changeQuantity;
  const deleteFromCart = props.deleteFromCart;

  const classes = useStyles();

  const cartSumValue = cart
    .map((cartElement) =>
      data
        .filter((d) => d.id === cartElement.id)
        .map((d) => d.price[cartElement.size] * cartElement.quantity)
    )
    .reduce((sum, e) => sum + e[0], 0);

  return (
    <Grid
      container
      style={{ margin: "10px", padding: "10px" }}
      direction="row"
      justify="center"
    >
      <Grid item xs={12} md={8}>
        <Paper align="center" className={classes.paper}>
          <Typography variant="h4">KOSZYK</Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Nazwa</TableCell>
                  <TableCell>Rozmiar</TableCell>
                  <TableCell>Ilość</TableCell>
                  <TableCell>Cena</TableCell>
                  <TableCell />
                </TableRow>
              </TableHead>

              <TableBody>
                {cart.map((i) => (
                  <TableRow key={`${i.id}_${i.size}`}>
                    <TableCell>{i.id}</TableCell>
                    <TableCell>
                      {data
                        .filter((pizza) => pizza.id === i.id)
                        .map((pizza) => pizza.name)}
                    </TableCell>
                    <TableCell>{i.size}</TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          changeQuantity(i.id, i.size, -1);
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      {i.quantity}
                      <IconButton
                        onClick={() => {
                          changeQuantity(i.id, i.size, 1);
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                    <TableCell>
                      {data
                        .filter((pizza) => pizza.id === i.id)
                        .map((pizza) => pizza.price[i.size]) *
                        i.quantity +
                        " zł"}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => {
                          deleteFromCart(i.id, i.size);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  <TableCell colSpan={3}></TableCell>
                  <TableCell align="right">Suma</TableCell>
                  <TableCell>{cartSumValue} zł</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}
