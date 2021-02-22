import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Navigation from "./Navigation";
import Cart from "./Cart";
import Error from "./Error";
import { useState, useEffect, useReducer } from "react";
import { Grid, Backdrop, makeStyles, Dialog } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import useFetch from "./services/useFetch";
import cartReducer from "./CartReducer";

const restaurants = [{
  "name": "Mania smaku",
  "url": "https://www.maniasmaku.pl/api/v1/sites/restaurant_menu/25265/pl"
},
{
  "name": "Roma",
  "url": "https://www.pizzeriaroma.pl/api/v1/sites/restaurant_menu/972/pl"
}, {
  "name": "Favola",
  "url": "https://www.pizzerialafavola.pl/api/v1/sites/restaurant_menu/5770/pl"
},
{
  "name": "Manufaktura Pizzy",
  "url": "https://www.manufakturapizzy.pl/api/v1/sites/restaurant_menu/28740/pl"
},
{
  "name": "New York Pizza",
  "url": "https://new-york-pizza-department-legnica.skubacz.pl/api/v1/sites/restaurant_menu/29655/pl"
}
]

let initCart;
try {
  initCart = JSON.parse(localStorage.getItem("cart")) ?? [];
} catch {
  initCart = [];
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
  const [cart, dispatch] = useReducer(cartReducer, initCart);
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);

  const { data, error, loading } = useFetch(
    selectedRestaurant.url
  );
  const pizzas = data.pizzas;
  const sizes = data.sizes;

  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

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
              data={pizzas}
              cart={cart}
              openBackdropCart={openBackdropCart}
              restaurants={restaurants}
              selectedRestaurant={selectedRestaurant}
              setSelectedRestaurant={setSelectedRestaurant} />
          </Grid>

          <Backdrop className={classes.backdrop} open={cartVisible}>
            <Dialog
              open={cartVisible}
              onClose={closeBackdropCart}
              className={classes.cartDialog}
              transitionDuration={500}
            >
              <Cart cart={cart} data={pizzas} dispatch={dispatch} />
            </Dialog>
          </Backdrop>
          <Grid item container xs={12}>
            <Grid item xs={3} sm={2}>
              <Navigation />
            </Grid>
            <Grid item xs={9} sm={9}>
              <Switch>
                <Route exact path="/">
                  <Content dispatch={dispatch} data={pizzas} sizes={sizes} />
                </Route>
                <Route path="/cart">
                  <Cart cart={cart} data={pizzas} dispatch={dispatch} />
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
