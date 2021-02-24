import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Error from "./Error";
import { useState, useEffect } from "react";
import { Grid, Backdrop, makeStyles, Dialog } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import useFetch from "./services/useFetch";
import useOnMountedEffect from "./services/useOnMountedEffect";
import { useCart } from "./services/cartContext";
import restaurants from "./restaurants";

let initRestaurant;

try {
  initRestaurant =
    JSON.parse(localStorage.getItem("restaurant")) ?? restaurants[0];
} catch {
  initRestaurant = restaurants[0];
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
  cartDialog: {
    flexDirection: "row",
    fullWidth: "true",
  },
}));

function App() {
  const classes = useStyles();

  const [cartVisible, setCartVisible] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(initRestaurant);

  const { data, error, loading } = useFetch(selectedRestaurant.url);
  const { dispatch } = useCart();
  const pizzas = data.pizzas;
  const sizes = data.sizes;

  useEffect(
    () =>
      localStorage.setItem("restaurant", JSON.stringify(selectedRestaurant)),
    [selectedRestaurant]
  );

  useOnMountedEffect(() => dispatch({ type: "clear" }), [selectedRestaurant]);

  const openBackdropCart = () => {
    setCartVisible(true);
  };

  const closeBackdropCart = () => {
    setCartVisible(false);
  };

  return (
    <>
      {!loading && !error && (
        <Grid container direction="column">
          <Grid item xs={12}>
            <Header
              openBackdropCart={openBackdropCart}
              selectedRestaurant={selectedRestaurant}
              setSelectedRestaurant={setSelectedRestaurant}
            />
          </Grid>

          <Backdrop className={classes.backdrop} open={cartVisible}>
            <Dialog
              open={cartVisible}
              onClose={closeBackdropCart}
              className={classes.cartDialog}
              transitionDuration={500}
            >
              <Cart data={pizzas} />
            </Dialog>
          </Backdrop>
          <Grid item container xs={12}>
            <Grid item xs={3} sm={2}>
              <Navigation />
            </Grid>
            <Grid item xs={9} sm={10}>
              <Switch>
                <Route exact path="/">
                  <Content data={pizzas} sizes={sizes} />
                </Route>
                <Route path="/cart">
                  <Cart data={pizzas} />
                </Route>
              </Switch>
            </Grid>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Footer />
          </Grid>
        </Grid>
      )}
      {error && <Error />}
    </>
  );
}

export default App;
