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

const iniIputs = [
  { id: "name", value: "", error: false },
  { id: "phone", value: "", error: false },
  { id: "address1", value: "", error: false },
  { id: "address2", value: "", error: false },
  { id: "postcode", value: "", error: false },
  { id: "city", value: "", error: false },
];

export default function Cart(props) {
  const { cart, dispatch } = useCart();
  const [inputs, setInputs] = useState(iniIputs);

  const classes = useStyles();

  const cartSumValue = cart.reduce(
    (sum, cartElement) => sum + cartElement.price * cartElement.quantity,
    0
  );

  function validateString(value) {
    if (value.length < 2) return false;
    return true;
  }
  function validatePhoneNb(value) {
    return true;
  }
  function validatePostCode(value) {
    return true;
  }

  function validateInputs(id, value) {
    if (id === "postcode") {
      return validatePostCode; //validatePostCode(name, value);
    } else if (id.includes("address") || id === "name" || id === "city") {
      return validateString(value);
    } else if (id === "phone") {
      return validatePhoneNb; //validatePhoneNb(name, value);
    }
  }

  function handleInputChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    if (validateInputs(id, value)) {
      setInputs(
        inputs.map((input) =>
          input.id === id ? { ...input, error: false } : input
        )
      );
    } else {
      setInputs(
        inputs.map((input) =>
          input.id === id ? { ...input, error: true } : input
        )
      );
    }
  }

  function getError(id) {
    return inputs.filter((i) => i.id === id)[0].error;
  }

  return (
    <Grid container item xs={12} justify="center">
      <Typography variant="h4">PODSUMOWANIE</Typography>
      <Grid container justify="center">
        <form>
          <Grid item xs={12}>
            <TextField
              error={getError("name")}
              className={classes.textField}
              id="name"
              label="Imie"
              helperText={getError("name") ? "Pole obowiazkowe" : ""}
              onChange={handleInputChange}
            />

            <TextField
              className={classes.textFieldShort}
              error={getError("phone")}
              id="phone"
              label="Telefon"
              helperText={getError("phone") ? "Pole obowiazkowe" : ""}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              error={getError("address1")}
              id="address1"
              label="Ulica"
              helperText={getError("address1") ? "Pole obowiazkowe" : ""}
              onChange={handleInputChange}
            />
            <TextField
              className={classes.textFieldShort}
              error={getError("address2")}
              id="address2"
              label="Nr domu"
              helperText={getError("address2") ? "Pole obowiazkowe" : ""}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textFieldShort}
              error={getError("postcode")}
              id="postcode"
              label="Kod pocztowy"
              helperText={getError("postcode") ? "Niepoprawny format" : ""}
              onChange={handleInputChange}
            />
            <TextField
              className={classes.textField}
              error={getError("city")}
              id="city"
              label="Miasto"
              helperText={getError("city") ? "Pole obowiazkowe" : ""}
              onChange={handleInputChange}
            />
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}
