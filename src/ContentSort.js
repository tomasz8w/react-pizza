import { useEffect, useState } from "react";
import {
  IconButton,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  FormGroup,
} from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import sortList from "./utils/sortList";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
  iconSort: {
    transform: (reverseSorting) =>
      reverseSorting ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

export default function ContentSort({
  selectedSize,
  sortedPizzaList,
  setSortedPizzaList,
}) {
  const [sort, setSort] = useState("index");
  const [reverseSorting, setReverseSorting] = useState(true);

  const classes = useStyles(reverseSorting);

  function handleSortChange(sortType) {
    if (sortType === "index") {
      setSort("index");
    } else if (sortType === "price") {
      setSort(`price[${selectedSize}]`);
    } else {
      setSort("index");
    }
  }

  useEffect(() => {
    setSortedPizzaList(sortList(sortedPizzaList, sort, reverseSorting));
  }, [sort, reverseSorting]);

  useEffect(() => {
    handleSortChange(sortValue);
  }, [selectedSize]);

  const sortValue = sort === "index" ? "index" : "price";

  return (
    <FormControl>
      <InputLabel>Sortuj według</InputLabel>
      <FormGroup row>
        <Select
          onChange={(event) => {
            handleSortChange(event.target.value);
          }}
          value={sortValue}
        >
          <MenuItem value="index">Domyślnie</MenuItem>
          <MenuItem value="price">Cena</MenuItem>
        </Select>

        <IconButton
          className={classes.iconSort}
          onClick={() => setReverseSorting(!reverseSorting)}
        >
          <SortIcon />
        </IconButton>
      </FormGroup>
    </FormControl>
  );
}
