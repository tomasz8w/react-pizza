import {
  Paper,
  Typography,
  Grid,
  makeStyles,
  Avatar,
  IconButton,
} from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import { useCart } from "./services/cartContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
  },
  avatarSelected: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.light,
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

export default function Cart(props) {
  const data = props.data;

  const { cart, dispatch } = useCart();

  const classes = useStyles();

  const cartSumValue = cart.reduce(
    (sum, cartElement) => sum + cartElement.price * cartElement.quantity,
    0
  );

  return (
    <Grid item xs={12}>
      <Paper align="center" className={classes.paper}>
        <Typography variant="h4">KOSZYK</Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
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
                  <TableCell>
                    {data
                      .filter((pizza) => pizza.id === i.id)
                      .map((pizza) => pizza.name)}
                  </TableCell>
                  {
                    <TableCell>
                      <AvatarGroup>
                        <Avatar
                          className={
                            parseInt(i.size) === 0
                              ? classes.avatarSelected
                              : classes.avatar
                          }
                        >
                          S
                        </Avatar>
                        <Avatar
                          className={
                            parseInt(i.size) === 1
                              ? classes.avatarSelected
                              : classes.avatar
                          }
                        >
                          M
                        </Avatar>
                        <Avatar
                          className={
                            parseInt(i.size) === 2
                              ? classes.avatarSelected
                              : classes.avatar
                          }
                        >
                          L
                        </Avatar>
                      </AvatarGroup>
                    </TableCell>
                  }
                  <TableCell>
                    <IconButton
                      disabled={parseInt(i.quantity) === 1 ? true : false}
                      onClick={() => {
                        dispatch({ type: "decrement", id: i.id, size: i.size });
                      }}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                    {i.quantity}
                    <IconButton
                      onClick={() => {
                        dispatch({ type: "increment", id: i.id, size: i.size });
                      }}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                  <TableCell>{i.price * i.quantity + " zł"}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        dispatch({ type: "delete", id: i.id, size: i.size });
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
  );
}
