import PizzaItem from "./PizzaItem";
import ContentSort from "./ContentSort";
import { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
}));

function Content(props) {
  const pizzaList = props.data;
  const sizes = props.sizes;

  const [selectedSize, setSelectedSize] = useState(2);
  const [onlyVegan, setOnlyVegan] = useState(false);
  const [sortedPizzaList, setSortedPizzaList] = useState(pizzaList);

  const classes = useStyles();

  useEffect(() => {
    setSelectedSize(sizes[0].value);
  }, [sizes]);

  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      spacing={2}
      alignItems="flex-start"
      justify="center"
    >
      <Grid item xs={12}>
        <ContentSort
          selectedSize={selectedSize}
          sortedPizzaList={sortedPizzaList}
          setSortedPizzaList={setSortedPizzaList}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel>Rozmiar dania</InputLabel>
          <Select
            onChange={(event) => {
              setSelectedSize(event.target.value);
            }}
            value={selectedSize}
          >
            {sizes.map((size) => (
              <MenuItem key={size.value} value={size.value}>
                {size.name} - {size.cm} cm
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormHelperText>Vege</FormHelperText>
          <Checkbox
            checked={onlyVegan}
            onChange={(event) => setOnlyVegan(event.target.checked)}
          />
        </FormControl>
      </Grid>

      {(onlyVegan
        ? sortedPizzaList.filter(
            (pizza) => pizza.vegetarian && pizza.price[selectedSize] > 0
          )
        : sortedPizzaList.filter((pizza) => pizza.price[selectedSize] > 0)
      ).map((pizza) => (
        <PizzaItem pizza={pizza} key={pizza.id} selectedSize={selectedSize} />
      ))}
    </Grid>
  );
}

export default Content;
