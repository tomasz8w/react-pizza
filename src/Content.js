import PizzaItem from './PizzaItem';
import { useState } from "react";
import data from './data.json'
import { Checkbox, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2)
  },

}));

function Content(props) {
  const classes = useStyles();

  const [selectedSize, setSelectedSize] = useState("1");
  const [onlyVegan, setOnlyVegan] = useState(false);

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12} >
        <FormControl className={classes.formControl} >
          <InputLabel>Rozmiar dania</InputLabel>
          <Select
            onChange={(event) => {
              setSelectedSize(event.target.value);
            }}
            value={selectedSize} >
            <MenuItem value="0" >Maly</MenuItem>
            <MenuItem value="1">Sredni</MenuItem>
            <MenuItem value="2">Duzy</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormHelperText>Vege</FormHelperText>
          <Checkbox checked={onlyVegan} onChange={(event) => setOnlyVegan(event.target.checked)} />
        </FormControl>
      </Grid>

      {
        (onlyVegan ? data.filter(pizza => pizza.vegetarian) : data)
          .map(pizza => <PizzaItem pizza={pizza} key={pizza.id} selectedSize={selectedSize} />)
      }
    </Grid>
  )
};

export default Content;