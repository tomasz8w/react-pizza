import PizzaItem from './PizzaItem';
import { useState } from "react";
import { FormControl, Grid, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2)
  }
}));

function Content(props) {
  const classes = useStyles();

  const [selectedSize, setSelectedSize] = useState("1");

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12} >
        <FormControl className={classes.formControl}>
          <InputLabel>Rozmiar dania</InputLabel>
          <Select
            onChange={(event) => {
              setSelectedSize(event.target.value);
            }}
            value={selectedSize}
          >
            <MenuItem value="0" >Maly</MenuItem>
            <MenuItem value="1">Sredni</MenuItem>
            <MenuItem value="2">Duzy</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {props.data.map(pizza => <PizzaItem pizza={pizza} key={pizza.id} selectedSize={selectedSize} />)}
    </Grid>
  )
};

export default Content;