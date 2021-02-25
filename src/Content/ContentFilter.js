import { useState, useEffect } from "react";
import {
  Checkbox,
  FormGroup,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

export default function ContentFilter(props) {
  const [onlyVegan, setOnlyVegan] = useState(false);
  const [filterKeywords, setFilterKeywords] = useState("");
  const {
    sizes,
    selectedSize,
    setSelectedSize,
    pizzaList,
    setFilteredPizzaList,
  } = props;

  useEffect(() => {
    const filteredList = (onlyVegan
      ? pizzaList.filter(
          (pizza) => pizza.vegetarian && pizza.price[selectedSize] > 0
        )
      : pizzaList.filter((pizza) => pizza.price[selectedSize] > 0)
    ).filter((pizza) =>
      pizza.description.toLowerCase().includes(filterKeywords)
    );

    const t = setTimeout(() => setFilteredPizzaList(filteredList), 300);
    return () => clearTimeout(t);
  }, [onlyVegan, selectedSize, pizzaList, filterKeywords]);

  return (
    <FormControl>
      <FormGroup row>
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

        <FormHelperText>Vege</FormHelperText>
        <Checkbox
          checked={onlyVegan}
          onChange={(event) => setOnlyVegan(event.target.checked)}
        />
        <TextField
          id="outlined-search"
          label="Filtruj składniki"
          type="search"
          variant="outlined"
          onChange={(event) =>
            setFilterKeywords(event.target.value.toLowerCase())
          }
        />
      </FormGroup>
    </FormControl>
  );
}
