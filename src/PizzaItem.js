import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import PizzaItemHeader from "./PizzaItemHeader";

function PizzaItem(props) {
  const pizza = props.pizza;
  const selectedSize = props.selectedSize;
  const dispatch = props.dispatch;

  return (
    <Grid item xs={10} sm={8} md={6} lg={4}>
      <Card style={{ minHeight: "380px" }}>
        <PizzaItemHeader
          pizza={pizza}
          selectedSize={selectedSize}
          dispatch={dispatch}
        />
        <CardContent>
          <CardContent>
            <Typography color="primary">Skladniki</Typography>
            <Typography color="textSecondary" component="p">
              <p>{pizza.description}</p>
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PizzaItem;
