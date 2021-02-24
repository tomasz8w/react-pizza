import PizzaItem from "./PizzaItem";
import ContentSort from "./ContentSort";
import ContentFilter from "./ContentFilter";
import { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
  },
}));

function Content(props) {
  const pizzaList = props.data;
  const sizes = props.sizes;

  const [selectedSize, setSelectedSize] = useState(2);
  const [filteredPizzaList, setFilteredPizzaList] = useState(pizzaList);
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
          listToSort={filteredPizzaList}
          setSortedPizzaList={setSortedPizzaList}
        />
      </Grid>
      <Grid item xs={12}>
        <ContentFilter
          sizes={sizes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          pizzaList={pizzaList}
          setFilteredPizzaList={setFilteredPizzaList}
        />
      </Grid>

      {sortedPizzaList.map((pizza) => (
        <PizzaItem pizza={pizza} key={pizza.id} selectedSize={selectedSize} />
      ))}
    </Grid>
  );
}

export default Content;
