import { useState, useEffect } from "react";
import {
  Checkbox,
  FormGroup,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";

export default function ContentFilter(props) {
  const [onlyVegan, setOnlyVegan] = useState(false);
  const {
    sizes,
    selectedSize,
    setSelectedSize,
    pizzaList,
    setFilteredPizzaList,
  } = props;

  useEffect(() => {
    const filteredList = onlyVegan
      ? pizzaList.filter(
          (pizza) => pizza.vegetarian && pizza.price[selectedSize] > 0
        )
      : pizzaList.filter((pizza) => pizza.price[selectedSize] > 0);

    setFilteredPizzaList(filteredList);
  }, [onlyVegan, selectedSize, pizzaList]);

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
      </FormGroup>
    </FormControl>
  );
}
