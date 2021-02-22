import sortBy from "lodash.sortby";
import PizzaItem from "./PizzaItem";
import { useEffect, useState } from "react";
import {
  IconButton,
  Checkbox,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
  iconSort: {
    transform: (reverseSorting) =>
      reverseSorting ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

function Content(props) {
  const pizzaList = props.data;
  const dispatch = props.dispatch;
  const sizes = props.sizes;

  const [selectedSize, setSelectedSize] = useState(2);
  const [onlyVegan, setOnlyVegan] = useState(false);
  const [sort, setSort] = useState("name");
  const [reverseSorting, setReverseSorting] = useState(false);
  const sortedPizzaList = reverseSorting
    ? sortBy(pizzaList, sort)
    : sortBy(pizzaList, sort).reverse();

  const classes = useStyles(reverseSorting);

  function handleSortChange(sortType) {
    if (sortType === "name") {
      setSort("name");
    } else if (sortType === "price") {
      setSort(`price[${selectedSize}]`);
    } else {
      setSort("name");
    }
  }

  useEffect(() => {
    setSelectedSize(sizes[0].value);
  }, [])

  useEffect(() => {
    handleSortChange(sortValue);
  }, [selectedSize]);

  const sortValue = sort === "name" ? "name" : "price";

  return (
    <Grid container direction="row" spacing={2} alignItems="flex-start">
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel>Sortuj według</InputLabel>
          <Select
            onChange={(event) => {
              handleSortChange(event.target.value);
            }}
            value={sortValue}
          >
            <MenuItem value="name">Nazwa</MenuItem>
            <MenuItem value="price">Cena</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <IconButton
            className={classes.iconSort}
            onClick={() => setReverseSorting(!reverseSorting)}
          >
            <SortIcon />
          </IconButton>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Rozmiar dania</InputLabel>
          <Select
            onChange={(event) => {
              setSelectedSize(event.target.value);
            }}
            value={selectedSize}
          >
            {
              sizes.map(size =>
                <MenuItem value={size.value}>{size.name} - {size.cm} cm</MenuItem>)
            }
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
        <PizzaItem
          pizza={pizza}
          key={pizza.id}
          selectedSize={selectedSize}
          dispatch={dispatch}
        />
      ))}
    </Grid>
  );
}

export default Content;
