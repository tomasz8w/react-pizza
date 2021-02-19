import sortBy from 'lodash.sortby';
import PizzaItem from './PizzaItem';
import { useEffect, useState } from "react";
import { IconButton, Checkbox, FormControl, FormHelperText, Grid, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
}));

function Content(props) {
  const pizzaList = props.data;
  const classes = useStyles();
  const dispatch = props.dispatch;

  const [selectedSize, setSelectedSize] = useState("1");
  const [onlyVegan, setOnlyVegan] = useState(false);
  const [sort, setSort] = useState("name");
  const [reverseSorting, setReverseSorting] = useState(false);
  const sortedPizzaList = reverseSorting ? sortBy(pizzaList, sort) : sortBy(pizzaList, sort).reverse();

  function handleSortChange(sortType) {
    if (sortType === "name") {
      setSort("name");
    }
    else if (sortType === "price") {
      setSort(`price[${selectedSize}]`)
    } else {
      setSort("name");
    }
  }

  useEffect(() => {
    handleSortChange(sortValue);
  }, [selectedSize, onlyVegan]);

  const sortValue = (sort === "name" ? "name" : "price");

  return (
    <Grid container direction="row" spacing={2}>
      <Grid item xs={12} >
        <FormControl className={classes.formControl} >
          <InputLabel>Sortuj według</InputLabel>
          <Select
            onChange={(event) => {
              handleSortChange(event.target.value);
            }}
            value={sortValue} >
            <MenuItem value="name" >Nazwa</MenuItem>
            <MenuItem value="price">Cena</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} >
          <IconButton onClick={() => setReverseSorting(!reverseSorting)}>
            <SortIcon />
          </IconButton>
        </FormControl>
        <FormControl className={classes.formControl} >
          <InputLabel>Rozmiar dania</InputLabel>
          <Select
            onChange={(event) => {
              setSelectedSize(event.target.value);
            }}
            value={selectedSize} >
            <MenuItem value="0" >Mały</MenuItem>
            <MenuItem value="1">Średni</MenuItem>
            <MenuItem value="2">Duży</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormHelperText>Vege</FormHelperText>
          <Checkbox checked={onlyVegan} onChange={(event) => setOnlyVegan(event.target.checked)} />
        </FormControl>
      </Grid>

      {
        (onlyVegan ? sortedPizzaList.filter(pizza => pizza.vegetarian && pizza.price[selectedSize] > 0)
          : sortedPizzaList.filter(pizza => pizza.price[selectedSize] > 0))
          .map(pizza =>
            <PizzaItem
              pizza={pizza}
              key={pizza.id}
              selectedSize={selectedSize}
              dispatch={dispatch} />)
      }
    </Grid>
  )
};

export default Content;