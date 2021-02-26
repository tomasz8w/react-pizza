import { Typography, Grid, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";

import { useCart } from "./services/cartContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.secondary.dark,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: "15ch",
  },
  textFieldShort: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: "14ch",
  },
}));

const iniIputs = {
  name: { value: "", error: false },
  phone: { value: "", error: false },
  address: { value: "", error: false },
  postcode: { value: "", error: false },
};

export default function Cart(props) {
  const { cart, dispatch } = useCart();
  const [inputs, setInputs] = useState(iniIputs);

  const classes = useStyles();

  const cartSumValue = cart.reduce(
    (sum, cartElement) => sum + cartElement.price * cartElement.quantity,
    0
  );

  return (
    <Grid container item xs={12} justify="center">
      <Typography variant="h4">PODSUMOWANIE</Typography>
      <Grid container justify="center">
        <form>
          <Grid item xs={12}>
            <TextField
              error={inputs.name.error}
              className={classes.textField}
              id="form-name"
              label="Imie"
              helperText={inputs.name.error ? "Pole obowiazkowe" : ""}
            />

            <TextField
              className={classes.textFieldShort}
              error={inputs.phone.error}
              id="form-phone"
              label="Telefon"
              helperText={inputs.phone.error ? "Pole obowiazkowe" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              error={inputs.address.error}
              id="form-address-1"
              label="Ulica"
              helperText={inputs.address.error ? "Pole obowiazkowe" : ""}
            />
            <TextField
              className={classes.textFieldShort}
              error={inputs.address.error}
              id="form-address-2"
              label="Nr domu"
              helperText={inputs.address.error ? "Pole obowiazkowe" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textFieldShort}
              error={inputs.postcode.error}
              id="form-address-code"
              label="Kod pocztowy"
              helperText={inputs.postcode.error ? "Pole obowiazkowe" : ""}
            />
            <TextField
              className={classes.textField}
              error={inputs.address.error}
              id="form-address-city"
              label="Miasto"
              helperText={inputs.address.error ? "Pole obowiazkowe" : ""}
            />
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
